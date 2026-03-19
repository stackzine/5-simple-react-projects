import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders landmark banner', () => {
    render(<Header />)

    expect(
      screen.getByRole('banner')
    ).toBeInTheDocument()
  })

  it('renders app name', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toHaveTextContent('Pomodoro Timer App')
  })
})
