export interface Coordinates {
  latitude: number
  longitude: number
}
export interface Location {
  city: string
  state: string
}

export interface Value {
  value: string
}
export interface ContentKey {
  key: string
  target: Value
  event: React.KeyboardEvent<HTMLInputElement>
  handleKey: (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => Promise<void> | undefined
}

export interface Image {
  images: []
  url: string
}

export interface ContentImage {
  dataImage: Image
}
