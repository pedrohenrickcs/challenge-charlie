import { BackgroundWeather } from '@/utils/backgroundWeather'
import { isMobile } from '@/utils/getDevice'
import React from 'react'
import { ContentData } from '@/types/WeatherContainer'
import Icon from '@/assets/icons/icons'

export const WeatherNoLocation = ({ data }: ContentData) => {
  return (
    <>
      <div
        className={`flex flex-col items-center md:flex-row justify-around pt-4 pb-4 bg-opacity-60 ${BackgroundWeather(data?.main?.feels_like)}`}
      >
        <div className="container flex justify-center items-center">
          <Icon name="empty" size={isMobile() ? 300 : 400} color="#fff" />
        </div>
        <div className="container text-textSecondary text-center md:text-left font-medium">
          <p className="text-3xl leading-tight">Vento: N/A</p>
          <p className="text-3xl leading-tight">Humidade: N/A</p>
          <p className="text-3xl leading-tight">Pressão: N/A</p>
        </div>
      </div>
    </>
  )
}
