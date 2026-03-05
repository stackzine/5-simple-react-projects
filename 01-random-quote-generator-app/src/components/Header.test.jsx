import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders banner landmark', () => {
    render(<Header />)

    const banner = screen.getByRole('banner')

    expect(banner).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Header />) 

    const heading = screen.getByRole('heading', {
      level: 1
    })

    expect(heading).toHaveTextContent('Random Quotes App')
  })
})
