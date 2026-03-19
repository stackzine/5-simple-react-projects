import React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import FancyButton from './FancyButton'

describe('FancyButton', () => {
  it('renders a button with correct text', () => {
    render(<FancyButton name="focus" focus={true} ariaKey="f" onClick={() => {}} />)

    const button = screen.getByRole('button', { name: /focus/i })

    expect(button).toBeInTheDocument()
  })

  it('has correct aria-keyshortcuts attribute', () => {
    render(<FancyButton name="focus" focus={true} ariaKey="f" onClick={() => {}} />)

    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('aria-keyshortcuts', 'f')
  })

  it('has correct title for focus mode', () => {
    render(<FancyButton name="focus" focus={true} ariaKey="f" onClick={() => {}} />)

    const button = screen.getByRole('button')

    expect(button).toHaveAttribute(
      'title',
      'Press F for Focus mode'
    )
  })

  it('calls onclick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<FancyButton name="focus" focus={true} ariaKey="f" onClick={handleClick} />)

    const button = screen.getByRole('button')

    await user.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  it('applies focused styles when focus is true', () => {
    render(<FancyButton name="focus" focus={true} ariaKey="f" onClick={() => {}} />)

    const button = screen.getByRole('button')

    expect(button.className).toMatch(/scale-125/)
    expect(button.className).toMatch(/text-white/)
  })

  it('applies unfocused styles when focus is false', () => {
    render(<FancyButton name="focus" focus={false} ariaKey="f" onClick={() => {}} />)

    const button = screen.getByRole('button')

    expect(button.className).toMatch(/scale-90/)
  })

  it('toggles focus state between buttons', async () => {
    const user = userEvent.setup()

    function Wrapper() {
      const [focus, setFocus] = React.useState(true)

      return (
        <>
          <FancyButton name="focus" focus={focus} ariaKey="f" onClick={() => setFocus(true)} />
          <FancyButton name="break" focus={!focus} ariaKey="b" onClick={() => setFocus(false)} />
        </>
      )
    }

    render(<Wrapper />)

    const focusBtn = screen.getByRole('button', { name: /focus/i })
    const breakBtn = screen.getByRole('button', { name: /break/i })

    await user.click(breakBtn)

    expect(breakBtn.className).toMatch(/scale-125/)
    expect(focusBtn.className).toMatch(/scale-90/)
  })
})
