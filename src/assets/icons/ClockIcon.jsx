export const ClockIcon = (props) => {
  return (
    <svg
      width="123"
      height="124"
      viewBox="0 0 123 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.8">
        <g filter="url(#filter0_ddii_3_3519)">
          <ellipse
            cx="60.5054"
            cy="61.5"
            rx="34.4275"
            ry="34.5"
            fill="#EAECF3"
          />
          <path
            d="M94.4329 61.5C94.4329 80.2787 79.2421 95.5 60.5054 95.5C41.7687 95.5 26.5779 80.2787 26.5779 61.5C26.5779 42.7213 41.7687 27.5 60.5054 27.5C79.2421 27.5 94.4329 42.7213 94.4329 61.5Z"
            stroke="#3F3F3F"
            strokeOpacity="0.1"
          />
        </g>
        <path
          d="M60.8486 79V64"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line // hour arrow
          x1="1.5"
          y1="-1.5"
          x2="13.8252"
          y2="-1.5"
          transform={`matrix(-0.743191 0.669079 -0.667524 -0.744589 56.272 62)`}
          // transform={`matrix(-0.743191 0.669079 -0.667524 -0.744589 56.272 62) rotate(${
          //   props.hourAngle + 150
          // })`}
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="61.1506"
          y1="32.2571"
          x2="61.1506"
          y2="38.8286"
          stroke="#9E9FA6"
        />
        <line
          x1="61.1506"
          y1="83.6929"
          x2="61.1506"
          y2="90.2643"
          stroke="#9E9FA6"
        />
        <line x1="83.2256" y1="60" x2="89.8109" y2="60" stroke="#9E9FA6" />
        <line x1="31.1716" y1="60" x2="37.7569" y2="60" stroke="#9E9FA6" />
        <path
          d="M60.6507 64.1428C62.6606 64.1428 64.297 62.5158 64.297 60.5C64.297 58.4841 62.6606 56.8571 60.6507 56.8571C58.6409 56.8571 57.0044 58.4841 57.0044 60.5C57.0044 62.5158 58.6409 64.1428 60.6507 64.1428Z"
          fill="#3F3DB6"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <line
          x1="0.5"
          y1="-0.5"
          x2="27.8362"
          y2="-0.5"
          transform="matrix(0.907994 -0.418982 0.413725 0.910402 58.853 61.8724)"
          stroke="#3F3DB6"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddii_3_3519"
          x="0.0778809"
          y="0"
          width="122.855"
          height="124"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-6" dy="-7" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_3519"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8" dy="8" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3_3519"
            result="effect2_dropShadow_3_3519"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3_3519"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_innerShadow_3_3519"
          />
          <feOffset dx="5" dy="7" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.65 0 0 0 0 0.65 0 0 0 0 0.65 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_3_3519"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect4_innerShadow_3_3519"
          />
          <feOffset dx="-6" dy="-1" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_3_3519"
            result="effect4_innerShadow_3_3519"
          />
        </filter>
      </defs>
    </svg>
  )
}
