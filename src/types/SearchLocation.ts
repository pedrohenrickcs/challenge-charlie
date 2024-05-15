export interface Location {
  city: string
  state: string
}

export interface Content {
  value: Location | undefined
  handleInputChange(): void
  handleKey(): void
}
