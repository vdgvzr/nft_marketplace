const Token = artifacts.require("NftContract");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
