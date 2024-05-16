import BrokenClouds from './broken-clouds'
import ClearSky from './clear-sky'
import FewClouds from './few-clouds'
import ScatteredClouds from './scattered-clouds'
import ShowerRain from './shower-rain'
import Rain from './rain'
import Thunderstorm from './thunderstorm'
import Snow from './snow'
import Mist from './mist'

const Icon = ({ name, size, color }) => {
  switch (name) {
    case '01d':
      return <ClearSky size={size} color={color} />
    case '02d':
      return <FewClouds size={size} color={color} />
    case '03d':
      return <ScatteredClouds size={size} color={color} />
    case '04d':
      return <BrokenClouds size={size} color={color} />
    case '09d':
      return <ShowerRain size={size} color={color} />
    case '10d':
      return <Rain size={size} color={color} />
    case '11d':
      return <Thunderstorm size={size} color={color} />
    case '13d':
      return <Snow size={size} color={color} />
    case '50d':
      return <Mist size={size} color={color} />
    default:
      return null
  }
}

export default Icon
