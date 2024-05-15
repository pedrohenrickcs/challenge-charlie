'use client'

import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import {
  ContentMain,
  ContentWeather,
  ContentWind,
  WeatherContainer,
} from '@/components/WeatherContainer/WeatherContainer'

import './styles/globals.css'
import Background from '@/components/Background/Background'
import { openCage } from '@/services/openCage'
import { openWeather } from '@/services/openWeather'
import { useState, useEffect, ChangeEvent } from 'react'

export interface ContentSearch {
  event: string
  value: string
}
export interface ContentKey {
  event: string
  key: string
}

export interface ContentKeyValue {
  event: ContentKey
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
export interface Location {
  city: string
  state: string
}

const Home = () => {
  const [location, setLocation] = useState<Location>()
  const [city, setCity] = useState()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [coordinates, setCoordinates] = useState<Coordinates>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await openCage(
          coordinates?.latitude,
          coordinates?.longitude,
        )

        setLocation({
          city: responseData.results[0].components.city,
          state: responseData.results[0].components.state_code,
        })

        console.log('responseData', responseData)
        setData(await openWeather(responseData.results[0].components.city))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }

    getData()
  }, [coordinates?.latitude, coordinates?.longitude])

  const handleInputChange = () => {
    setCity(city)
  }

  const handleKey = async (event) => {
    if (event.key === 'Enter') {
      setData(await openWeather(event.target.value))
    }
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Background />
      <SearchLocation
        value={location}
        handleInputChange={handleInputChange}
        handleKey={handleKey}
      />
      <WeatherContainer data={data} />
    </>
  )
}

export default Home
