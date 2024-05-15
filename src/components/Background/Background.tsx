/* eslint-disable @next/next/no-img-element */
'use client'

const Background = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <img
        src="./bg.jpg"
        alt="BG"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </>
  )
}

export default Background
