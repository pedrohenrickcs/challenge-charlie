import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import WeatherContainer from '@/components/WeatherContainer/WeatherContainer'

import './styles/globals.css'
import Background from '@/components/Background/Background'

const Home = () => {
  return (
    <>
      <Background />
      <SearchLocation />
      <WeatherContainer />
    </>
  )
}

export default Home
