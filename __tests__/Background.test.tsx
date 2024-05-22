// __tests__/Background.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ContentBackgroundData } from '@/types/Background'
import Background from '@/components/Background/Background'

const dataImage: ContentBackgroundData = {
  images: [
    {
      url: '/th?id=OHR.MalaysiaTea_PT-BR0222561765_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
      title: 'Malaysia Tea Plantation',
    },
  ],
}

describe('Background Component', () => {
  it('renders the background image correctly', () => {
    render(<Background images={dataImage.images} />)

    const imgElement = screen.getByAltText('Malaysia Tea Plantation')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute(
      'src',
      `${process.env.NEXT_PUBLIC_BING_URL}/th?id=OHR.MalaysiaTea_PT-BR0222561765_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp`,
    )
  })
})
