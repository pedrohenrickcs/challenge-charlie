const BrokenClouds = ({ size = 24, color = 'currentColor', ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...rest}
    >
      <path
        fill={color}
        d="M512 240.001c0-49.167-40-89.146-89.167-89.146-2.396 0-4.771.104-7.146.291-23.125-28.854-57.979-45.978-95.688-45.978-37.688 0-72.562 17.124-95.688 45.979a91.045 91.045 0 00-7.188-.291C168 150.855 128 190.834 128 240.001c0 5.146.688 10.104 1.5 15.042-.542.708-1.188 1.354-1.708 2.083A110.94 110.94 0 00112 256.001C50.25 256.001 0 306.25 0 368c0 61.751 50.25 112 112 112 13.688 0 27.084-2.5 39.709-7.333C180.666 497.917 217.5 512 256 512c38.542 0 75.333-14.083 104.291-39.333A110.825 110.825 0 00400 480c61.75 0 112-50.249 112-112 0-25.688-9.042-49.083-23.666-67.999 14.582-15.896 23.666-36.833 23.666-60zM400 448c-17.125 0-32.916-5.499-45.938-14.666C330.583 461.625 295.624 480 256 480c-39.625 0-74.584-18.375-98.062-46.666C144.938 442.501 129.126 448 112 448c-44.188 0-80-35.812-80-80s35.812-79.999 80-79.999c10.812 0 21.062 2.188 30.438 6.062.562-1.062 1.25-2 1.812-3.021A129.694 129.694 0 01164.916 263C188 239.084 220.083 224 256 224c49.709 0 92.334 28.666 113.541 70.062 5.646-2.312 11.668-3.813 17.875-4.812L400 288c12.334 0 23.875 3.042 34.312 8 11.312 5.416 21.021 13.374 28.646 23.188C473.458 332.709 480 349.542 480 368c0 44.188-35.812 80-80 80zm65.562-170.375c-18.479-13.458-41-21.624-65.562-21.624-5.312 0-10.562.375-15.792 1.125-29.874-40.708-77.021-65.125-128.208-65.125-34.125 0-66.312 11.042-92.938 30.334 7.479-22.854 28.729-39.479 54.062-39.479 7.75 0 15.062 1.562 21.75 4.332 15.188-29.562 45.625-50.02 81.125-50.02s65.958 20.457 81.084 50.02c6.729-2.77 14.083-4.332 21.749-4.332 31.584 0 57.167 25.583 57.167 57.146.001 14.478-5.561 27.54-14.437 37.623z"
      ></path>
    </svg>
  )
}

export default BrokenClouds
