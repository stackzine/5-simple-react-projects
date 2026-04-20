import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders heading', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /the quiz app/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
