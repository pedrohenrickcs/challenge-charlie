import '../styles/globals.css'

import { useEffect, useState } from 'react'

import Background from '@/components/Background/Background'
import Loading from '@/components/Loading/Loading'

import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import { WeatherContainer } from '@/components/WeatherContainer/WeatherContainer'
import { openCage } from '@/services/openCage'
import { openWeather, openWeatherNextDays } from '@/services/openWeather'
import { ContentImage, Coordinates, Location } from '@/types/Home'

const Home = ({ dataImage }: ContentImage) => {
  const [location, setLocation] = useState<Location>()
  const [data, setData] = useState()
  const [dataNextDays, setDataNextDays] = useState()
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
    if (coordinates) {
      const getData = async () => {
        try {
          const responseData = await openCage(
            coordinates.latitude,
            coordinates.longitude,
          )
          const city = responseData.results[0].components.city
          const state = responseData.results[0].components.state_code

          setLocation({ city, state })

          const weatherData = await openWeather(city)
          setData(weatherData)

          const weatherNextDaysData = await openWeatherNextDays(city)
          setDataNextDays(weatherNextDaysData)

          setIsLoading(false)
        } catch (error) {
          console.error(error)
          setIsLoading(false)
        }
      }
      getData()
    }
  }, [coordinates])

  const handleKey = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (event?.key === 'Enter') {
      const target = event.target as HTMLInputElement
      const location = target.value

      setData(await openWeather(location))
      setDataNextDays(await openWeatherNextDays(location))
    }
  }

  if (isLoading) return <Loading />

  return (
    <>
      <Background data={dataImage} />
      <SearchLocation defaultValue={location} handleKey={handleKey} />
      <WeatherContainer data={data} dataNextDays={dataNextDays} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BING}`)
  const dataImage = await res.json()

  return { props: { dataImage } }
}

export default Home
