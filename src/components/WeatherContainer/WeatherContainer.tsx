'use client'

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
export interface Coordinates {
  latitude: number
  longitude: number
}

export interface ContentData {
  data: Content | undefined
}

export const WeatherContainer = ({ data }: ContentData) => {
  const firstLetter = `${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.substring(1)}`

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

        <p className="pb-4 text-5xl">{firstLetter}</p>
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
