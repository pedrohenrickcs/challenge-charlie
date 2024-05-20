import '../styles/globals.css'

import { useEffect, useState } from 'react'

import Background from '@/components/Background/Background'
import Loading from '@/components/Loading/Loading'

import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import { WeatherContainer } from '@/components/WeatherContainer/WeatherContainer'
import { openCage } from '@/services/openCage'
import { openWeather, openWeatherNextDays } from '@/services/openWeather'
import { ContentImage, ContentKey, Coordinates, Location } from '@/types/Home'
import { ContentData } from '@/types/WeatherContainer'

const Home = ({ dataImage }: ContentImage) => {
  const [location, setLocation] = useState<Location>()
  const [data, setData] = useState<ContentData>()
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
            coordinates?.latitude,
            coordinates?.longitude,
          )

          console.log('sdfdsf')

          setData(await openWeather(responseData?.results[0]?.components.city))
          setDataNextDays(
            await openWeatherNextDays(
              responseData?.results[0]?.components.city,
            ),
          )

          setLocation({
            city: responseData.results[0].components.city,
            state: responseData.results[0].components.state_code,
          })

          setIsLoading(false)
        } catch (error) {
          console.log('erro', error)

          setIsLoading(false)
        }
      }
      getData()
    }
  }, [coordinates])

  const handleKey = async (event: ContentKey) => {
    if (event?.key === 'Enter') {
      if (coordinates) {
        setData(await openWeather(event.target.value))
        setDataNextDays(await openWeatherNextDays(event.target.value))
      }
    }
  }

  if (isLoading) return <Loading />

  console.log('data', data)

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
