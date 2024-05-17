export interface Location {
  city: string
  state: string
}

export interface ContentSearch {
  defaultValue: Location | undefined
  handleInputChange(): void
  handleKey: any
}
