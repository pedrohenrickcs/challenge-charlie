/* eslint-disable @next/next/no-img-element */
'use client'

import { bing } from '@/services/bing'
import { useState, useEffect } from 'react'

const Background = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await bing()
        setData(responseData)
        setIsLoading(false)
      } catch (error) {
        // setError(error)
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  // if (error) {
  //   return <div>Ocorreu um erro: {error.message}</div>
  // }

  console.log('data', data)

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
