import BrokenClouds from './broken-clouds'
import ClearSky from './clear-sky'
import FewClouds from './few-clouds'
import ScatteredClouds from './scattered-clouds'
import ShowerRain from './shower-rain'
import Rain from './rain'
import Thunderstorm from './thunderstorm'
import Snow from './snow'
import Mist from './mist'
import Compass from './compass'
import Empty from './empty'

import { IconType } from '@/types/Icon'

const Icon = ({ name, size, color, className }: IconType) => {
  switch (name) {
    case '01d':
      return <ClearSky size={size} color={color} className={className} />
    case '02d':
      return <FewClouds size={size} color={color} className={className} />
    case '03d':
      return <ScatteredClouds size={size} color={color} className={className} />
    case '04d':
      return <BrokenClouds size={size} color={color} className={className} />
    case '09d':
      return <ShowerRain size={size} color={color} className={className} />
    case '10d':
      return <Rain size={size} color={color} className={className} />
    case '11d':
      return <Thunderstorm size={size} color={color} className={className} />
    case '13d':
      return <Snow size={size} color={color} className={className} />
    case '50d':
      return <Mist size={size} color={color} className={className} />
    case '01n':
      return <ClearSky size={size} color={color} className={className} />
    case '02n':
      return <FewClouds size={size} color={color} className={className} />
    case '03n':
      return <ScatteredClouds size={size} color={color} className={className} />
    case '04n':
      return <BrokenClouds size={size} color={color} className={className} />
    case '09n':
      return <ShowerRain size={size} color={color} className={className} />
    case '10n':
      return <Rain size={size} color={color} className={className} />
    case '11n':
      return <Thunderstorm size={size} color={color} className={className} />
    case '13n':
      return <Snow size={size} color={color} className={className} />
    case '50n':
      return <Mist size={size} color={color} className={className} />
    case 'compass':
      return <Compass size={size} color={color} className={className} />
    case 'empty':
      return <Empty size={size} color={color} className={className} />
    default:
      return null
  }
}

export default Icon
