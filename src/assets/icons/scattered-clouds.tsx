const ScatteredClouds = ({ size = 24, color = 'currentColor', ...rest }) => {
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
        d="M488.334 247.417c14.624 18.916 23.666 42.312 23.666 68 0 61.749-50.25 112-112 112-13.688 0-27.084-2.5-39.709-7.333-28.958 25.249-65.749 39.333-104.291 39.333-38.5 0-75.334-14.084-104.291-39.333A110.825 110.825 0 01112 427.417c-61.75 0-112-50.251-112-112 0-61.75 50.25-112 112-112 5.312 0 10.562.375 15.792 1.125.521-.729 1.166-1.375 1.708-2.083-.812-4.938-1.5-9.896-1.5-15.041 0-49.167 40-89.146 89.125-89.146 2.416 0 4.812.104 7.188.292 23.125-28.854 58-45.979 95.688-45.979 37.709 0 72.562 17.125 95.688 45.979a90.391 90.391 0 017.146-.292C472 98.271 512 138.25 512 187.417c0 23.166-9.084 44.104-23.666 60z"
      ></path>
    </svg>
  )
}

export default ScatteredClouds