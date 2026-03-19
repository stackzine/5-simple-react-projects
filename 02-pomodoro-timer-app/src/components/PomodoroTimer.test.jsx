import { act, fireEvent, render, screen } from '@testing-library/react'
import PomodoroTimer from './PomodoroTimer'
import userEvent from '@testing-library/user-event'

describe('PomodoroTimer', () => {
  it('renders timer with correct time', () => {
    render(<PomodoroTimer key="focus" type="focus" time="1500" />)

    expect(screen.getByRole('timer')).toBeInTheDocument()
    expect(screen.getByText(/25:00/i)).toBeInTheDocument()
  })

  it('starts timer', async () => {
    vi.useFakeTimers()
  
    render(<PomodoroTimer type="focus" time={10} />)

    fireEvent.click(screen.getByRole('button', { name: /start/i }))

    act(() => {
      vi.advanceTimersByTime(2000)
    })
  
    expect(screen.getByLabelText(/Focus timer 0 minutes 8 seconds remaining/i)).toHaveTextContent(/0:08/i)
  })

  it('pauses timer', async () => {
    vi.useFakeTimers()

    render(<PomodoroTimer type="focus" time={10} />)

    fireEvent.click(screen.getByRole('button', { name: /start/i }))

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    fireEvent.click(screen.getByRole('button', { name: /pause/i }))

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByLabelText(/Focus timer 0 minutes 8 seconds remaining/i)).toHaveTextContent(/0:08/i)
  })

  it('resets timer', () => {
    vi.useFakeTimers()

    render(<PomodoroTimer type="focus" time={10} />)

    fireEvent.click(screen.getByRole('button', { name: /start/i }))

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    fireEvent.click(screen.getByRole('button', { name: /reset/i }))

    expect(screen.getByText(/0:10/i)).toBeInTheDocument()
  })

  it('plays audio when the timer reaches zero', () => {
    vi.useFakeTimers()

    const playMock = vi.spyOn(window.HTMLMediaElement.prototype, 'play')
                       .mockImplementation(() => {})

    render(<PomodoroTimer type="focus" time={10} />)

    fireEvent.click(screen.getByRole('button', { name: /start/i }))

    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(playMock).toHaveBeenCalled()
  })

  it('pauses audio after 12secs', () => {
    vi.useFakeTimers()

    const pauseMock = vi.spyOn(window.HTMLMediaElement.prototype, 'pause')
                        .mockImplementation(() => {})

    render(<PomodoroTimer type="focus" time={10} />)

    fireEvent.click(screen.getByRole('button', { name: /start/i }))

    act(() => {
      vi.advanceTimersByTime(10000)
    })

    act(() => {
      vi.advanceTimersByTime(12000)
    })

    expect(pauseMock).toHaveBeenCalled()
  })
})
