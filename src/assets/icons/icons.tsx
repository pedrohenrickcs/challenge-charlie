import BrokenClouds from './broken-clouds'
import ClearSky from './clear-sky'
import FewClouds from './few-clouds'
import ScatteredClouds from './scattered-clouds'
import ShowerRain from './shower-rain'
import Rain from './rain'
import Thunderstorm from './thunderstorm'
import Snow from './snow'
import Mist from './mist'

import { IconType } from '@/types/Icon'

const Icon = ({ name, size, color }: IconType) => {
  switch (name) {
    case '01d' || '01n':
      return <ClearSky size={size} color={color} />
    case '02d' || '02n':
      return <FewClouds size={size} color={color} />
    case '03d' || '03n':
      return <ScatteredClouds size={size} color={color} />
    case '04d' || '04n':
      return <BrokenClouds size={size} color={color} />
    case '09d' || '09n':
      return <ShowerRain size={size} color={color} />
    case '10d' || '10n':
      return <Rain size={size} color={color} />
    case '11d' || '11n':
      return <Thunderstorm size={size} color={color} />
    case '13d' || '13n':
      return <Snow size={size} color={color} />
    case '50d' || '50n':
      return <Mist size={size} color={color} />
    default:
      return null
  }
}

export default Icon
