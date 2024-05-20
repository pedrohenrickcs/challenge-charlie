export interface Location {
  city: string
  state: string
}

export interface ContentSearch {
  defaultValue: Location | undefined
  handleKey: (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => Promise<void> | void
}
