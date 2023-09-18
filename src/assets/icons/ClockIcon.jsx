import { SVGProps } from 'react'

// interface IClockIcon {
//   props: SVGProps<SVGSVGElement>
//   hourAngle: number
//   minAngle: number
// }

export const ClockIcon = ({ props, hourAngle, minAngle } /*:IClockIcon*/) => {
  return (
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.8">
        <g filter="url(#filter0_ddii_3_3461)">
          <circle cx="60.9009" cy="61.5" r="34.5" fill="#EAECF3" />
          <circle
            cx="60.9009"
            cy="61.5"
            r="34"
            stroke="#3F3F3F"
            strokeOpacity="0.1"
          />
        </g>
        <line
          x1="60.9282"
          y1="31.2571"
          x2="60.9282"
          y2="37.8286"
          stroke="#9E9FA6"
        />
        <line
          x1="61.4011"
          y1="81.6929"
          x2="61.4011"
          y2="88.2643"
          stroke="#9E9FA6"
        />
        <line x1="81.4365" y1="60" x2="88.0079" y2="60" stroke="#9E9FA6" />
        <line x1="32.4792" y1="60" x2="39.0507" y2="60" stroke="#9E9FA6" />
        <line
          x1="60.9177"
          y1="55.843"
          x2="60.9177"
          y2="43.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${minAngle} ,61, 61)`}
        />
        <line
          x1="60.9177"
          y1="55.843"
          x2="60.9177"
          y2="43.5"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} ,61, 61)`}
        />
        <path
          d="M60.9009 64.1428C62.9128 64.1428 64.5438 62.5119 64.5438 60.5C64.5438 58.4881 62.9128 56.8571 60.9009 56.8571C58.889 56.8571 57.2581 58.4881 57.2581 60.5C57.2581 62.5119 58.889 64.1428 60.9009 64.1428Z"
          fill="#3F3DB6"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <line
          x1="0.5"
          y1="-0.5"
          x2="27.8525"
          y2="-0.5"
          transform="matrix(0 -1 0.999998 0.00210148 61.426 63.3525)"
          stroke="#3F3DB6"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddii_3_3461"
          x="0.400879"
          y="0"
          width="123"
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
            result="effect1_dropShadow_3_3461"
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
            in2="effect1_dropShadow_3_3461"
            result="effect2_dropShadow_3_3461"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3_3461"
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
            result="effect3_innerShadow_3_3461"
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
            result="effect3_innerShadow_3_3461"
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
            result="effect4_innerShadow_3_3461"
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
            in2="effect3_innerShadow_3_3461"
            result="effect4_innerShadow_3_3461"
          />
        </filter>
      </defs>
    </svg>
  )
}
