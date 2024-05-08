import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import WeatherContainer from '@/components/WeatherContainer/WeatherContainer'

import './styles/globals.css'

const Home = () => {
  return (
    <>
      <SearchLocation />
      <WeatherContainer />
    </>
  )
}

export default Home
