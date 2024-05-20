/* eslint-disable @next/next/no-img-element */

import { ContentBackgroundData } from '@/types/Background'

const Background = (data: ContentBackgroundData) => {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_BING_URL}${data?.data?.images[0].url}`}
        alt={data?.data?.images[0].title}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
    </>
  )
}

export default Background
