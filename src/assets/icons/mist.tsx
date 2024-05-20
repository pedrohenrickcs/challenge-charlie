const Mist = ({ size = 24, color = 'currentColor', ...rest }) => {
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
        d="M112 160h288c8.833 0 16-7.167 16-16s-7.167-16-16-16H112c-8.833 0-16 7.167-16 16s7.167 16 16 16zm288 32H112c-8.833 0-16 7.167-16 16s7.167 16 16 16h288c8.833 0 16-7.167 16-16s-7.167-16-16-16zm0 64H112c-8.833 0-16 7.167-16 16s7.167 16 16 16h288c8.833 0 16-7.167 16-16s-7.167-16-16-16zm0 64H112c-8.833 0-16 7.167-16 16s7.167 16 16 16h288c8.833 0 16-7.167 16-16s-7.167-16-16-16z"
      ></path>
    </svg>
  )
}

export default Mist
