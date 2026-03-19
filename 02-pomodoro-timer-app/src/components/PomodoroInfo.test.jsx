import { render, screen } from '@testing-library/react'
import PomodoroInfo from './PomodoroInfo'

describe('PomodoroInfo', () => {
  it('has landmark role aside', () => {
    render(<PomodoroInfo />)

    expect(
      screen.getByRole('complementary')
    ).toBeInTheDocument()
  })

  it('displays pomodoro description text', () => {
    render(<PomodoroInfo />)

    expect(
      screen.getByText(/Pomodoro timer is a productivity tool/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/25-minute/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/5-minute/i)
    ).toBeInTheDocument()
  })

  it('has a paragraph', () => {
    render(<PomodoroInfo />)

    const paragraph = screen.getByText(/pomodoro timer/i)

    expect(paragraph.tagName).toBe('P')
  })
})
