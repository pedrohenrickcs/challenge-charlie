export interface Location {
  city: string
  state: string
}

export interface ContentSearch {
  value: Location
  handleInputChange(): void
  handleKey(): void
}
