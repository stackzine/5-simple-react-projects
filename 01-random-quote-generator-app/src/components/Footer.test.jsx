import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import { expect } from "vitest"

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })

  it('renders all attribution links', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(3)
  })

  it('links open in a new tab', () => {
    render(<Footer />)

    const links = screen.getAllByRole('link')

    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('contains screen reader text', () => {
    render(<Footer />)

    const hiddenText = screen.getAllByText('(opens in a new tab)')

    expect(hiddenText.length).toBeGreaterThan(0)
  })

})
