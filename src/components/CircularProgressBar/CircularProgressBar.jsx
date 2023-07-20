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
