import { useState } from 'react'
import Icon from '@/assets/icons/icons'

import { ContentData } from '@/types/WeatherContainer'
import {
  toggleCelsiusTemperature,
  toggleFahrenheitTemperature,
} from '@/utils/celsiusToFahrenheit'
import { isMobile } from '@/utils/getDevice'
import { WeatherNoLocation } from './WeatherNoLocation'
import { BackgroundWeather } from '@/utils/backgroundWeather'
import { t } from 'i18next'

export const WeatherContainer = ({
  data,
  dataNextDays,
  coordinates,
}: ContentData) => {
  const [temp, setTemp] = useState<string | boolean>('Cº')

  const descriptionCapitalize = `${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.substring(1)}`

  const toggleTemp = () => {
    setTemp((currentState) => !currentState)
  }

  return !coordinates && !data ? (
    <WeatherNoLocation />
  ) : (
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
            <p className="py-4 text-3xl">{t('today')}</p>
            {data?.main?.feels_like && (
              <p className="pb-8 text-4xl cursor-pointer" onClick={toggleTemp}>
                {temp
                  ? toggleCelsiusTemperature(data?.main?.feels_like)
                  : toggleFahrenheitTemperature(data?.main?.feels_like)}
              </p>
            )}
          </div>

          <h1 className="pb-4 text-5xl">{descriptionCapitalize}</h1>
          <p className="text-3xl leading-tight">
            {t('afterTomorrow')}: {data?.wind?.speed}Kmh
          </p>
          <p className="text-3xl leading-tight">
            {t('humidity')}: {data?.main?.humidity}%
          </p>
          <p className="text-3xl leading-tight">
            {t('pressure')}: {data?.main?.pressure}hPA
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row justify-around md:justify-end bg-opacity-80 ${BackgroundWeather(dataNextDays?.list[1].main.feels_like)}`}
      >
        <div className="container text-textSecondary text-center md:w-1/2 md:text-left">
          <div className="w-full">
            <p className="py-4 text-3xl">{t('tomorrow')}</p>
            {dataNextDays?.list[1].main.feels_like && (
              <p className="pb-8 text-4xl cursor-pointer" onClick={toggleTemp}>
                {temp
                  ? toggleCelsiusTemperature(
                      dataNextDays?.list[1].main.feels_like,
                    )
                  : toggleFahrenheitTemperature(
                      dataNextDays?.list[1].main.feels_like,
                    )}
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row justify-around md:justify-end bg-opacity-100 ${BackgroundWeather(dataNextDays?.list[1].main.feels_like)}`}
      >
        <div className="container text-textSecondary text-center md:w-1/2 md:text-left">
          <div className="w-full">
            <p className="py-4 text-3xl">{t('afterTomorrow')}</p>
            {dataNextDays?.list[1].main.feels_like && (
              <p className="pb-8 text-4xl cursor-pointer" onClick={toggleTemp}>
                {temp
                  ? toggleCelsiusTemperature(
                      dataNextDays?.list[1].main.feels_like,
                    )
                  : toggleFahrenheitTemperature(
                      dataNextDays?.list[1].main.feels_like,
                    )}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
