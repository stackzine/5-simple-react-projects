import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Quote from './Quote'
import { useQuote } from '../hooks/useQuote'
import { expect, it, vi } from 'vitest'

vi.mock('../hooks/useQuote')

describe('Quote', () => {
  it('shows loading message when loading', () => {
    useQuote.mockReturnValue({
      loading: true,
      quote: null,
      error: null,
      refresh: vi.fn()
    })
    
    render(<Quote />)

    expect(
      screen.getByRole('status')
    ).toHaveTextContent('Loading...')
  })

  it('renders quote and author', () => {
    useQuote.mockReturnValue({
      loading: false,
      quote: {
        quote: 'Stay hungry. Stay foolish.',
        author: 'Steve Jobs'
      },
      error: null,
      refresh: vi.fn()
    })

    render(<Quote />)

    expect(
      screen.getByText('Stay hungry. Stay foolish.')
    ).toBeInTheDocument()

    expect(
      screen.getByText('- Steve Jobs')
    ).toBeInTheDocument()
  })

  it('shows an error message', () => {
    useQuote.mockReturnValue({
      loading: false,
      quote: null,
      error: 'No quotes to display',
      refresh: vi.fn()
    })

    render(<Quote />)

    expect(
      screen.getByRole('alert')
    ).toHaveTextContent('No quotes to display')
  })

  it('calls refresh when button is clicked', async () => {
    const refreshMock = vi.fn()

    useQuote.mockReturnValue({
      loading: false,
      quote: null,
      error: null,
      refresh: refreshMock
    })

    render(<Quote />)

    const button = screen.getByRole('button', {
      name: /refresh quote/i
    })

    await userEvent.click(button)

    expect(refreshMock).toHaveBeenCalled()
  })

  it('refreshes quote when pressing R', () => {
    const refreshMock = vi.fn()

    useQuote.mockReturnValue({
      loading: false,
      quote: null,
      error: null,
      refresh: refreshMock
    })

    render(<Quote />)

    fireEvent.keyDown(document.body, { key: 'r' })

    expect(refreshMock).toHaveBeenCalled()
  })

  it('checks button is disabled while loading', () => {
    useQuote.mockReturnValue({
      loading: true,
      quote: null,
      error: null,
      refresh: vi.fn()
    })

    render(<Quote />)

    const button = screen.getByRole('button', {
      name: /refresh quote/i
    })

    expect(button).toBeDisabled()
  })
})
