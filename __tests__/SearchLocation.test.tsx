import { SearchLocation } from '@/components/SearchLocation/SearchLocation'
import { render, fireEvent, screen } from '@testing-library/react'

describe('SearchLocation component', () => {
  const mockHandleKey = jest.fn()

  const mockContentSearch = {
    defaultValue: {
      city: 'New York',
      state: 'NY',
    },
    handleKey: mockHandleKey,
    coordinates: null,
  }

  test('renders input field with placeholder when coordinates are not available', () => {
    render(<SearchLocation {...mockContentSearch} />)

    const inputElement = screen.getByPlaceholderText('Digite uma cidade')

    expect(inputElement).toBeInTheDocument()
  })

  test('calls handleKey function on keyup event', () => {
    render(<SearchLocation {...mockContentSearch} />)

    const inputElement = screen.getByPlaceholderText('Digite uma cidade')

    fireEvent.keyUp(inputElement, { key: 'Enter' })

    expect(mockHandleKey).toHaveBeenCalled()
  })
})
