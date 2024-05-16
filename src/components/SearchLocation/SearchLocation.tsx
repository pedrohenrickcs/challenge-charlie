import { ContentSearch } from '@/types/SearchLocation'

export const SearchLocation = ({
  handleInputChange,
  handleKey,
  defaultValue,
}: ContentSearch) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full py-6 px-4 text-4xl outline-none text-textPrimary font-medium"
        placeholder=""
        onChange={handleInputChange}
        defaultValue={`${defaultValue?.city}, ${defaultValue?.state}`}
        // value={value}
        onKeyUp={handleKey}
      />
    </div>
  )
}
