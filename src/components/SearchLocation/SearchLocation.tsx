export interface Location {
  city: string
  state: string
}

export interface Content {
  value: Location | undefined
  handleInputChange(): void
  handleKey(): void
}

export const SearchLocation = ({ handleInputChange, handleKey }: Content) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full py-6 px-4 text-4xl outline-none text-textPrimary font-medium"
        placeholder=""
        // value={`${value?.city}, ${value?.state}`}
        onChange={handleInputChange}
        onKeyUp={handleKey}
      />
    </div>
  )
}
