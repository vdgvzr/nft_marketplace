// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.19;
pragma experimental ABIEncoderV2;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract NftContract is ERC721, Ownable {
    using SafeMath for uint256;
    using SafeMath for uint64;
    using SafeMath for uint32;
    using SafeMath for uint16;

    constructor() ERC721("NftBots", "NB") {}

    event Birth(address owner, uint256 botId, uint256 materId, uint256 paterId, uint256 genes);

    struct Bot {
        uint256 genes;
        uint64 creationTime;
        uint32 materId;
        uint32 paterId;
        uint16 generation;
    }

    Bot[] bots;

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    uint256 public GEN0_COUNTER;

    function totalSupply() public view returns (uint) {
        return bots.length;
    }

    function _createBotGen0(uint256 _genes) public onlyOwner() returns (uint256) {
        require(GEN0_COUNTER < CREATION_LIMIT_GEN0);
        GEN0_COUNTER++;
        return _createBot(0, 0, 0, _genes, msg.sender);
    }

    function _createBot(
        uint256 _materId,
        uint256 _paterId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Bot memory _bot = Bot({
            genes: _genes,
            creationTime: uint64(block.timestamp),
            materId: uint32(_materId),
            paterId: uint32(_paterId),
            generation: uint16(_generation)
        });

        bots.push(_bot);
        uint256 newBotId = bots.length - 1;

        emit Birth(_owner, newBotId, _materId, _paterId, _genes);

        _safeMint(_owner, newBotId);

        return newBotId;
    }

    function getBot(uint256 tokenId) external view returns (
        uint256 genes,
        uint256 creationTime,
        uint256 materId,
        uint256 paterId,
        uint256 generation,
        address owner
    ) {
        Bot storage bot = bots[tokenId];

        genes = uint256(bot.genes);
        creationTime = uint256(bot.creationTime);
        materId = uint256(bot.materId);
        paterId = uint256(bot.paterId);
        generation = uint256(bot.generation);
        owner = address(ownerOf(tokenId));
    }
}