/* eslint-disable @next/next/no-img-element */

const Background = (data) => {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_BING_URL}${data?.data?.images[0].url}`}
        alt={data?.data?.images[0].title}
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
