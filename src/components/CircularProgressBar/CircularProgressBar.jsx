import React from "react";

export default function CircularProgressBar() {
  return (
    <svg
      width="500"
      height="505"
      viewBox="0 0 500 505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "scale(0.5)",
        marginTop: "-120px",
        marginLeft: "-65px",
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.3029 357.379L250.059 250L464.716 357.342C480.895 325.042 490 288.584 490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250C10 288.599 19.1122 325.07 35.3029 357.379Z"
        fill="#EBEDF5"
      />
      <path
        d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250"
        stroke="url(#paint0_linear_86_0)"
        stroke-width="20"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M248.668 38C247.461 38 246.375 38.7362 245.928 39.8581L169 233H170.81C169.624 238.479 169 244.166 169 250C169 294.183 204.817 330 249 330C293.183 330 329 294.183 329 250C329 244.166 328.376 238.479 327.19 233H328.356L323.771 221.49C323.494 220.764 323.206 220.043 322.909 219.327L251.408 39.8579C250.961 38.7361 249.876 38 248.668 38Z"
        fill="#1E1E28"
      />
      <g opacity="0.0414109" filter="url(#filter0_f_86_0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M250 450C338.366 450 410 378.366 410 290C410 201.634 338.366 130 250 130C161.634 130 90 201.634 90 290C90 378.366 161.634 450 250 450Z"
          fill="black"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M250 410C338.366 410 410 338.366 410 250C410 161.634 338.366 90 250 90C161.634 90 90 161.634 90 250C90 338.366 161.634 410 250 410Z"
        fill="white"
      />
      <path
        d="M389 250C389 326.768 326.768 389 250 389C173.232 389 111 326.768 111 250C111 173.232 173.232 111 250 111C326.768 111 389 173.232 389 250Z"
        stroke="#EBEDF5"
        stroke-width="2"
      />
      <defs>
        <filter
          id="filter0_f_86_0"
          x="35.6344"
          y="75.6344"
          width="428.731"
          height="428.731"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="27.1828"
            result="effect1_foregroundBlur_86_0"
          />
        </filter>
        <linearGradient
          id="paint0_linear_86_0"
          x1="490"
          y1="10"
          x2="10"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#44B77B" />
          <stop offset="0.479043" stop-color="#FFD033" />
          <stop offset="1" stop-color="#FF3B3F" />
        </linearGradient>
        <clipPath id="clip0_86_0">
          <rect
            width="224"
            height="165"
            fill="white"
            transform="translate(143 167)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
