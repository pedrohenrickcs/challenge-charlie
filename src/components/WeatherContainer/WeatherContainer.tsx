'use client'

import { openWeather } from '@/services/openWeather'
import { useState, useEffect } from 'react'
import Sun from '../icons/Sun'

const WeatherContainer = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await openWeather()
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

  console.log('data 2', data)

  return (
    <div className="flex flex-row justify-around pt-16 pb-32 bg-background-yellow bg-opacity-80">
      <div className="container flex justify-center items-center">
        <Sun size={500} color="#fff" />
      </div>
      <div className="container text-textSecondary">
        <div>
          <p className="py-4 text-3xl">HOJE</p>
          <p className="pb-8 text-4xl">{data?.main?.feels_like}</p>
        </div>

        <p className="pb-4 text-5xl">Ensolarado</p>
        <p className="text-3xl leading-tight">Vento? NO 6.4Kmh</p>
        <p className="text-3xl leading-tight">Humidade: 78%</p>
        <p className="text-3xl leading-tight">Pressão: 1003hPA</p>
      </div>
    </div>
  )
}

export default WeatherContainer
