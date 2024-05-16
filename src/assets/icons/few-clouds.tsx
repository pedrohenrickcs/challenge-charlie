const FewClouds = ({ size = 24, color = 'currentColor', ...rest }) => {
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
        fillRule="evenodd"
        d="M177.615 288c7.438-36.521 39.688-64 78.396-64 38.709 0 70.958 27.479 78.376 64h32c-7.834-54.125-54.084-96-110.376-96-56.271 0-102.541 41.875-110.375 96h31.979zm78.396-128c8.833 0 16-7.167 16-16v-32c0-8.833-7.167-16-16-16-8.832 0-16 7.167-16 16v32c0 8.833 7.168 16 16 16zm147.062-3.083c-6.249-6.25-16.374-6.25-22.625 0l-22.625 22.625c-6.249 6.25-6.249 16.375 0 22.625 6.251 6.25 16.376 6.25 22.625 0l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625zm-248.896 22.625l-22.625-22.625c-6.249-6.25-16.373-6.25-22.625 0-6.249 6.25-6.249 16.375 0 22.625l22.625 22.625c6.252 6.25 16.376 6.25 22.625 0 6.252-6.25 6.252-16.375 0-22.625zM352.011 320h-192c-8.832 0-16 7.167-16 16s7.168 16 16 16h192c8.833 0 16-7.167 16-16s-7.167-16-16-16zm-32 64h-128c-8.832 0-16 7.167-16 16s7.168 16 16 16h128c8.833 0 16-7.167 16-16s-7.167-16-16-16z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default FewClouds