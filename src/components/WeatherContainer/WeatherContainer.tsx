'use client'

import { openWeather } from '@/services/openWeather'
import { useState, useEffect } from 'react'
import Sun from '../icons/Sun'

export interface ContentWeather {
  description: string
}
export interface ContentMain {
  feels_like: number
  humidity: number
  pressure: number
  weather: ContentWeather
}
export interface ContentWind {
  speed: number
}
export interface Content {
  main: ContentMain
  weather: ContentWeather[]
  wind: ContentWind
}

const WeatherContainer = () => {
  const [data, setData] = useState<Content>()
  const [isLoading, setIsLoading] = useState(true)
  const [firstLetter, setFIrstLetter] = useState(true)
  // const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await openWeather()
        setData(responseData)
        setFIrstLetter(
          responseData.weather[0].description.charAt(0).toUpperCase(),
        )
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

  console.log('firstLetter', firstLetter)

  return (
    <div className="flex flex-row justify-around pt-16 pb-32 bg-background-yellow bg-opacity-80">
      <div className="container flex justify-center items-center">
        <Sun size={500} color="#fff" />
      </div>
      <div className="container text-textSecondary">
        <div>
          <p className="py-4 text-3xl">HOJE</p>
          {data?.main?.feels_like && (
            <p className="pb-8 text-4xl">
              {Math.trunc(data?.main?.feels_like)} Cº
            </p>
          )}
        </div>

        <p className="pb-4 text-5xl">
          {`${firstLetter}${data?.weather[0].description.substring(1)}`}
        </p>
        <p className="text-3xl leading-tight">Vento: {data?.wind?.speed}Kmh</p>
        <p className="text-3xl leading-tight">
          Humidade: {data?.main?.humidity}%
        </p>
        <p className="text-3xl leading-tight">
          Pressão: {data?.main?.pressure}hPA
        </p>
      </div>
    </div>
  )
}

export default WeatherContainer
