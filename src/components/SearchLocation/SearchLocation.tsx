import Icon from '@/assets/icons/icons'
import { ContentSearch } from '@/types/SearchLocation'

export const SearchLocation = ({
  handleInputChange,
  handleKey,
  defaultValue,
}: ContentSearch) => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <Icon name="compass" size={90} color="#8492a6" className="absolute p-4" />
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full py-6 pr-4 pl-24 text-4xl outline-none text-textPrimary font-medium"
        placeholder=""
        onChange={handleInputChange}
        defaultValue={`${defaultValue?.city}, ${defaultValue?.state}`}
        // value={value}
        onKeyUp={handleKey}
      />
    </div>
  )
}
