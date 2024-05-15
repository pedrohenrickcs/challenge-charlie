/* eslint-disable @next/next/no-img-element */

const Background = (data) => {
  console.log('dataimegeeee', data?.dataImage?.images[0].url)

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_BING_URL}${data?.data?.images[0].url}`}
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
