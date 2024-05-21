import Icon from '@/assets/icons/icons'
import { ContentSearch } from '@/types/SearchLocation'
import { HTMLInputTypeAttribute } from 'react'

export const SearchLocation: React.FC<ContentSearch> = ({
  defaultValue,
  handleKey,
  coordinates,
}: ContentSearch) => {
  const textInput: HTMLInputTypeAttribute = !coordinates
    ? 'Digite uma cidade'
    : ''

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <Icon name="compass" size={90} color="#8492a6" className="absolute p-4" />
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full py-6 pr-4 pl-24 text-4xl outline-none text-textPrimary font-medium"
        placeholder={textInput}
        defaultValue={
          coordinates && `${defaultValue?.city}, ${defaultValue?.state}`
        }
        onKeyUp={handleKey}
      />
    </div>
  )
}
