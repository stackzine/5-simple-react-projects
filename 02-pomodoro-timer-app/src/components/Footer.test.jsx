import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders landmark footer', () => {
    render(<Footer />)

    expect(
      screen.getByRole('contentinfo')
    ).toBeInTheDocument()
  })

  it('renders made with love line', () => {
    render(<Footer />)

    expect(
      screen.getByText(/Made with/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/love/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Stackzine/i)
    ).toBeInTheDocument()
  })

  it('renders Stackzine link correctly', () => {
    render(<Footer />)

    const link = screen.getByRole('link', {
      name: /Stackzine/i
    })

    expect(link).toHaveAttribute('href', 'https://stackzine.com/')
  })

  it('opens links in new tab', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')

    for(let link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('has open in new tab text for sr', () => {
    render(<Footer />)

    const srText = screen.getAllByText(/open in new tab/i)
    
    expect(srText.length).toBeGreaterThan(0)
  })
})
