export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feels_like?: number | any
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface RootContent {
  weather: Weather[]
  main: Main
  wind: Wind
  name: string | undefined
}

export interface List {
  main: Main
  weather: Weather[]
  wind: Wind
}

export interface RootNextDays {
  cod: string
  message: number
  cnt: number
  list: List[]
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface ContentData {
  data?: RootContent
  dataNextDays?: RootNextDays
  coordinates?: Coordinates | null
  inputText?: string
}
