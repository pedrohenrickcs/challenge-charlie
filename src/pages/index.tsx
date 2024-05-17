import '../styles/globals.css'

import { useState, useEffect } from 'react'

import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import Background from '@/components/Background/Background'
import Loading from '@/components/Loading/Loading'

import { openCage } from '@/services/openCage'
import { openWeather, openWeatherNextDays } from '@/services/openWeather'
import { ContentKey, Coordinates, ContentImage, Location } from '@/types/Home'
import { WeatherContainer } from '@/components/WeatherContainer/WeatherContainer'

const Home = ({ dataImage }: ContentImage) => {
  const [location, setLocation] = useState<Location>()
  const [city, setCity] = useState()
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
    const getData = async () => {
      try {
        const responseData = await openCage(
          coordinates?.latitude,
          coordinates?.longitude,
        )

        setData(await openWeather(responseData?.results[0]?.components.city))
        setDataNextDays(
          await openWeatherNextDays(responseData?.results[0]?.components.city),
        )

        setLocation({
          city: responseData.results[0].components.city,
          state: responseData.results[0].components.state_code,
        })

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

  const handleKey = async (event: ContentKey) => {
    if (event?.key === 'Enter') {
      setData(await openWeather(event.target.value))
      setDataNextDays(await openWeatherNextDays(event.target.value))
    }
  }

  if (isLoading) return <Loading />

  return (
    <>
      <Background data={dataImage} />
      <SearchLocation
        defaultValue={location}
        handleInputChange={handleInputChange}
        handleKey={handleKey}
      />
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
