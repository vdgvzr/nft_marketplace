export default function antennae(dna) {
  if (dna.antennae === 0 || dna.antennae === 9) {
    return;
  } else if (
    dna.antennae === 1 ||
    dna.antennae === 5 ||
    dna.antennae === 4 ||
    dna.antennae === 8
  ) {
    let left = (
      <g id="leftAntenna">
        <use
          fill={`#${dna.antennaColor}`}
          fillRule="evenodd"
          xlinkHref="#path-13"
        ></use>
        <use
          fill="black"
          fillOpacity="1"
          filter="url(#filter-14)"
          xlinkHref="#path-13"
        ></use>
        <rect
          stroke="#000000"
          strokeWidth="3"
          strokeLinejoin="square"
          x="71.5"
          y="1.5"
          width="10"
          height="164"
          rx="5"
        ></rect>
      </g>
    );
    let right = (
      <g id="rightAntenna">
        <use
          fill={`#${dna.antennaColor}`}
          fillRule="evenodd"
          xlinkHref="#path-2"
        ></use>
        <use
          fill="black"
          fillOpacity="1"
          filter="url(#filter-3)"
          xlinkHref="#path-2"
        ></use>
        <rect
          stroke="#000000"
          strokeWidth="3"
          strokeLinejoin="square"
          x="250.5"
          y="1.5"
          width="10"
          height="164"
          rx="5"
        ></rect>
      </g>
    );

    return { left, right };
  } else if (dna.antennae === 2 || dna.antennae === 6) {
    let left = (
      <g id="leftAntenna">
        <use
          fill={`#${dna.antennaColor}`}
          fillRule="evenodd"
          xlinkHref="#path-13"
        ></use>
        <use
          fill="black"
          fillOpacity="1"
          filter="url(#filter-14)"
          xlinkHref="#path-13"
        ></use>
        <rect
          stroke="#000000"
          strokeWidth="3"
          strokeLinejoin="square"
          x="71.5"
          y="1.5"
          width="10"
          height="164"
          rx="5"
        ></rect>
      </g>
    );

    return { left };
  } else if (dna.antennae === 3 || dna.antennae === 7) {
    let right = (
      <g id="rightAntenna">
        <use
          fill={`#${dna.antennaColor}`}
          fillRule="evenodd"
          xlinkHref="#path-2"
        ></use>
        <use
          fill="black"
          fillOpacity="1"
          filter="url(#filter-3)"
          xlinkHref="#path-2"
        ></use>
        <rect
          stroke="#000000"
          strokeWidth="3"
          strokeLinejoin="square"
          x="250.5"
          y="1.5"
          width="10"
          height="164"
          rx="5"
        ></rect>
      </g>
    );

    return { right };
  }
}
