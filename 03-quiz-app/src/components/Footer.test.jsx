import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })

  test('renders link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', {
      name: /stackzine/i,
    })

    expect(link).toHaveAttribute('href', 'https://stackzine.com')
  })

  test('link opens in new tab', () => {
    render(<Footer />)

    const link = screen.getByRole('link', {
      name: /stackzine/i,
    })

    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  test('has open in new tab text for sr', () => {
    render(<Footer />)

    expect(screen.getAllByText(/open in new tab/i).length).toBeGreaterThan(0)
  })
})
