import { ContentData } from '@/types/WeatherContainer'
import Icon from '../../assets/icons/icons'
import { BackgroundWeather } from '@/utils/backgroundWeather'
import { isMobile } from '@/utils/getDevice'
import { useState } from 'react'
import { celsiusToFahrenheit } from '@/utils/celsiusToFahrenheit'

export const WeatherContainer = ({ data, dataNextDays }: ContentData) => {
  const firstLetter = `${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.substring(1)}`
  const [temp, setTemp] = useState('Cº')
  const celsiusTemperature: number | string =
    `${Math.trunc(data?.main && data?.main?.feels_like)} Cº`
  const fahrenheitTemperature = `${celsiusToFahrenheit(Math.trunc(data?.main?.feels_like))} Fº`

  return (
    <>
      <div
        className={`flex flex-col md:flex-row justify-around pt-4 pb-4 bg-opacity-60 ${BackgroundWeather(data?.main?.feels_like)}`}
      >
        <div className="container flex justify-center items-center">
          <Icon
            name={data?.weather[0]?.icon}
            size={isMobile() ? 300 : 400}
            color="#fff"
          />
        </div>
        <div className="container text-textSecondary text-center md:text-left font-medium">
          <div>
            <p className="py-4 text-3xl">HOJE</p>
            {data?.main?.feels_like && (
              <p
                className="pb-8 text-4xl cursor-pointer"
                onClick={() => {
                  setTemp((currentState) => !currentState)
                }}
              >
                {temp ? celsiusTemperature : fahrenheitTemperature}
              </p>
            )}
          </div>

          <p className="pb-4 text-5xl">{firstLetter}</p>
          <p className="text-3xl leading-tight">
            Vento: {data?.wind?.speed}Kmh
          </p>
          <p className="text-3xl leading-tight">
            Humidade: {data?.main?.humidity}%
          </p>
          <p className="text-3xl leading-tight">
            Pressão: {data?.main?.pressure}hPA
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row justify-around md:justify-end bg-opacity-80 ${BackgroundWeather(data?.main?.feels_like)}`}
      >
        <div className="container text-textSecondary text-center md:w-1/2 md:text-left">
          <div className="w-full">
            <p className="py-4 text-3xl">Amanhã</p>
            {dataNextDays?.list[0].main.feels_like && (
              <p className="pb-8 text-4xl">
                {Math.trunc(dataNextDays?.list[0].main.feels_like)} Cº
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row justify-around md:justify-end bg-opacity-100 ${BackgroundWeather(data?.main?.feels_like)}`}
      >
        <div className="container text-textSecondary text-center md:w-1/2 md:text-left">
          <div className="w-full">
            <p className="py-4 text-3xl">Depois de amanhã</p>
            {dataNextDays?.list[1].main.feels_like && (
              <p className="pb-8 text-4xl">
                {Math.trunc(dataNextDays?.list[1].main.feels_like)} Cº
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
