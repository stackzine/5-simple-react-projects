import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)

  const heading = screen.getByText(/hello react \+ hello webpack/i)

  expect(heading).toBeInTheDocument()
})
