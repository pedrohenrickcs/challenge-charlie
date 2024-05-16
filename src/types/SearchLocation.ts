export interface Location {
  city: string
  state: string
}

export interface ContentSearch {
  defaultValue: Location
  handleInputChange(): void
  handleKey(): void
}
