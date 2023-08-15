export default function expressions(dna) {
  switch (dna.expression) {
    case 1:
      return (
        <g
          id="expression-group"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect id="left-eye" x="0.5" y="0.5" width="15" height="15"></rect>
          <rect id="right-eye" x="65.5" y="0.5" width="15" height="15"></rect>
          <rect id="mouth" x="0.5" y="84.5" width="80" height="8"></rect>
        </g>
      );
    case 2:
      return (
        <g
          id="expressionGroup-Copy"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <path
            d="M18.8137085,3.8137085 L18.8137085,10.5850137 L10.8063614,10.8289312 L10.9264445,18.8137085 L3.8137085,18.8137085 L3.8137085,3.8137085 L18.8137085,3.8137085 Z"
            id="Rectangle"
            transform="translate(11.3137, 11.3137) rotate(45) translate(-11.3137, -11.3137)"
          ></path>
          <path
            d="M79.8137085,3.8137085 L79.8137085,10.5850137 L71.8063614,10.8289312 L71.9264445,18.8137085 L64.8137085,18.8137085 L64.8137085,3.8137085 L79.8137085,3.8137085 Z"
            id="Rectangle-Copy-5"
            transform="translate(72.3137, 11.3137) rotate(45) translate(-72.3137, -11.3137)"
          ></path>
          <path
            d="M3.56322624,79.6973767 C3.94405852,79.9019786 4.26710658,80.2118249 4.65561385,80.5951985 C6.08501686,82.0057137 8.24120253,84.4122383 11.1252799,87.8137085 L75.7455556,87.8137085 C78.6001781,84.4240369 80.7342913,82.0232505 82.1489592,80.6123601 C82.4378987,80.3241922 82.694603,80.0786419 82.9195276,79.8768962 C82.515706,81.9399107 79.7446712,87.276113 75.2124132,95.8137085 L11.6555929,95.8137085 C6.96878405,87.0955397 4.24846179,81.7243114 3.56322624,79.6973767 Z"
            id="Rectangle"
          ></path>
        </g>
      );
    case 3:
      return (
        <g
          id="expressionGroup-Copy"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <path
            d="M17,0.5 L17,11 L27.5,11 L27.5,17 L17,17 L17,27.5 L11,27.5 L11,17 L0.5,17 L0.5,11 L11,11 L11,0.5 L17,0.5 Z"
            id="Combined-Shape"
          ></path>
          <path
            d="M70,0.5 L70,11 L80.5,11 L80.5,17 L70,17 L70,27.5 L64,27.5 L64,17 L53.5,17 L53.5,11 L64,11 L64,0.5 L70,0.5 Z"
            id="Combined-Shape-Copy"
          ></path>
          <path
            d="M11.0714286,95 L11.0714286,103 L0.5,103 L0.5,95 L11.0714286,95 Z M28.4285714,95 L28.4285714,103 L17.8571429,103 L17.8571429,95 L28.4285714,95 Z M45.7857143,95 L45.7857143,103 L35.2142857,103 L35.2142857,95 L45.7857143,95 Z M63.1428571,95 L63.1428571,103 L52.5714286,103 L52.5714286,95 L63.1428571,95 Z M80.5,95 L80.5,103 L69.9285714,103 L69.9285714,95 L80.5,95 Z"
            id="Combined-Shape"
          ></path>
        </g>
      );
    case 4:
      return (
        <g
          id="expressionGroup-Copy"
          transform="translate(57.7373, 69.567)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <path
            d="M22.7989899,6.29898987 L22.7989899,16.7989899 L33.2989899,16.7989899 L33.2989899,22.7989899 L22.7989899,22.7989899 L22.7989899,33.2989899 L16.7989899,33.2989899 L16.7989899,22.7989899 L6.29898987,22.7989899 L6.29898987,16.7989899 L16.7989899,16.7989899 L16.7989899,6.29898987 L22.7989899,6.29898987 Z"
            id="Combined-Shape"
            transform="translate(19.799, 19.799) rotate(45) translate(-19.799, -19.799)"
          ></path>
          <path
            d="M75.7989899,6.29898987 L75.7989899,16.7989899 L86.2989899,16.7989899 L86.2989899,22.7989899 L75.7989899,22.7989899 L75.7989899,33.2989899 L69.7989899,33.2989899 L69.7989899,22.7989899 L59.2989899,22.7989899 L59.2989899,16.7989899 L69.7989899,16.7989899 L69.7989899,6.29898987 L75.7989899,6.29898987 Z"
            id="Combined-Shape-Copy"
            transform="translate(72.799, 19.799) rotate(45) translate(-72.799, -19.799)"
          ></path>
          <path
            d="M56.303,94.012 L65.2989899,104.299552 L74.2554748,94.0572364 L88.133907,109.831255 L83.1425811,115.539381 L74.2989899,105.42435 L65.4543053,115.540631 L65.253,115.666 L56.2989899,105.425393 L47.4555217,115.539282 L47.253,115.665 L38.2989899,105.425393 L29.4555217,115.539282 L29.252,115.665 L20.2979473,105.425393 L11.455396,115.539378 L6.46318462,109.83024 L20.2546191,94.0582318 L20.303,94.012 L29.2989899,104.299552 L38.2546117,94.0582234 L38.303,94.012 L47.2989899,104.299552 L56.2546117,94.0582234 L56.303,94.012 Z"
            id="Combined-Shape"
          ></path>
        </g>
      );
    case 5:
      return (
        <g
          id="expressionGroup-Copy"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect
            id="Rectangle"
            x="0.923553467"
            y="7.5"
            width="15"
            height="4"
          ></rect>
          <rect
            id="Rectangle-Copy"
            x="65.9235535"
            y="0.5"
            width="15"
            height="15"
          ></rect>
          <path
            d="M0.553454458,62.0347787 C1.26042467,63.1607374 2.25792168,64.9798837 3.58946456,67.6268999 L3.87227631,68.191522 C5.05453071,70.5616019 6.47976332,73.5371109 8.14803901,77.1180176 L72.9423814,77.1180175 C75.7951435,70.9529595 77.928612,66.5857753 79.3436735,64.0169293 C79.586435,63.5762298 79.8066782,63.1899141 80.0047994,62.8586868 C79.6179025,66.6812756 76.9009432,76.541746 72.2478892,92.5 L8.84025055,92.5 C7.54900716,88.1282614 6.40737979,84.210751 5.41543468,80.7476862 L5.14140858,79.789228 C2.38715224,70.1372604 0.850526392,64.2193194 0.553454458,62.0347787 Z"
            id="Rectangle"
          ></path>
        </g>
      );
    case 6:
      return (
        <g
          id="expressionGroup-Copy"
          transform="translate(143.7373, 166.5679) rotate(180)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect id="Rectangle" x="0.5" y="0.5" width="15" height="15"></rect>
          <rect
            id="Rectangle-Copy"
            x="65.5"
            y="0.5"
            width="15"
            height="15"
          ></rect>
          <rect id="Rectangle" x="0.5" y="84.5" width="80" height="8"></rect>
        </g>
      );
    case 7:
      return (
        <g
          id="expression-group"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect id="Rectangle" x="0.5" y="0.5" width="19" height="19"></rect>
          <rect
            id="Rectangle-Copy-5"
            x="61.5"
            y="0.5"
            width="19"
            height="19"
          ></rect>
        </g>
      );
    case 8:
      return (
        <g
          id="expression-group"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect id="Rectangle" x="0.5" y="0.5" width="15" height="15"></rect>
          <rect
            id="Rectangle-Copy"
            x="65.5"
            y="0.5"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-6"
            x="0.5"
            y="23.5"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-5"
            x="65.5"
            y="23.5"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-8"
            x="0.5"
            y="46.5"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-7"
            x="65.5"
            y="46.5"
            width="15"
            height="15"
          ></rect>
          <rect id="Rectangle" x="0.5" y="84.5" width="80" height="8"></rect>
        </g>
      );
    case 9:
      return (
        <g
          id="expression-group"
          transform="translate(65.7373, 78.5679)"
          fill={`#${dna.expressionColor}`}
          stroke={`#${dna.expressionColor}`}
        >
          <rect
            id="Rectangle"
            fill="#FFFFFF"
            x="0.5"
            y="21.0208153"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy"
            fill="#FFFFFF"
            x="65.5"
            y="21.0208153"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-6"
            fill="#FFFFFF"
            x="0.5"
            y="21.0208153"
            width="15"
            height="15"
          ></rect>
          <rect
            id="Rectangle-Copy-7"
            fill="#FFFFFF"
            transform="translate(16.5, 12.0208) rotate(45) translate(-16.5, -12.0208)"
            x="2.5"
            y="10.0208153"
            width="28"
            height="4"
          ></rect>
          <rect
            id="Rectangle-Copy-8"
            fill="#FFFFFF"
            transform="translate(64.5, 12.0208) rotate(-45) translate(-64.5, -12.0208)"
            x="50.5"
            y="10.0208153"
            width="28"
            height="4"
          ></rect>
          <rect
            id="Rectangle-Copy-5"
            fill="#FFFFFF"
            x="65.5"
            y="21.0208153"
            width="15"
            height="15"
          ></rect>
          <path
            d="M40.4992999,105.5 L41.1683404,105.500936 C52.1736023,105.531776 62.108706,106.322397 69.2886281,107.584069 C72.9050305,108.219552 75.8168128,108.972115 77.8022823,109.810445 C78.7214215,110.198536 79.4354023,110.60023 79.9130168,111.021698 C80.2717081,111.338222 80.5,111.655746 80.5,112 C79.7288402,112.66827 79.1136364,112.73885 78.3188494,112.744251 C76.1603328,112.758916 72.7750421,112.241515 68.4905687,111.591166 C61.206015,110.485428 51.3498454,108.990664 40.5,108.990664 C29.6501546,108.990664 19.793985,110.485428 12.5094313,111.591166 C8.22495794,112.241515 4.83966715,112.758916 2.68115061,112.744251 C1.88636362,112.73885 1.27115981,112.66827 0.864174688,112.479161 C0.5,111.651074 0.734026436,111.3297 1.10112081,111.009291 C1.58966585,110.582876 2.31979717,110.176624 3.25952847,109.784501 C5.2871221,108.938444 8.25940022,108.180368 11.9473325,107.542947 C19.2545973,106.279963 29.3495703,105.5 40.4992999,105.5 Z"
            id="Oval"
            fill="#D8D8D8"
          ></path>
        </g>
      );
    case 10:
      return;
  }
}
