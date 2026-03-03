import { useState, useEffect, useCallback } from 'react'

const serverUrl = 'https://dummyjson.com/quotes/random'

export function useQuote() {
  const [loading, setLoading] = useState(true)
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState('')

  const fetchQuote = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(serverUrl)

      if(!res.ok) {
        throw new Error('Failed to fetch quote')
      }

      const data = await res.json()

      if(data?.quote) {
        setQuote(data)
      } else {
        throw new Error('No quotes found')
      }
    } catch(err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchQuote()
  }, [fetchQuote])

  return { loading, quote, error, refresh: fetchQuote }
}