import { useEffect } from 'react'
import quotes from '../assets/quotes.png'
import reload from '../assets/reload.png'
import { useQuote } from '../hooks/useQuote'

function Quote() {
  const { loading, quote, error, refresh } = useQuote()

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName.toLowerCase()
      if(tag === 'input' || tag === 'textarea') {
        return;
      }

      if(e.key.toLowerCase() === 'r' && !loading) {
        refresh()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [refresh, loading])

  return (
    <section className="text-center">
      <img 
        className="mx-auto size-25" 
        src={quotes} 
        alt="" 
        aria-hidden="true" 
      />
      
      <div aria-live="polite">
        {loading && 
          <p className="font-medium text-gray-500 py-5" role="status">Loading...</p>
        }
        {!loading && quote && (
          <blockquote className="py-4">
            <p className="text-white text-3xl">
              {quote?.quote}
            </p>
            <cite className="block font-medium text-gray-500 pt-2">
              - {quote?.author}
            </cite>
          </blockquote>
        )}
      </div>
      {error && 
        <p role="alert" className="text-white text-3xl py-4">
          {error}
        </p>
      }
      
      <button 
        disabled={loading}
        onClick={refresh}
        aria-label="Refresh Quote"
        aria-keyshortcuts="R"
        title="Press R to refresh"
        className="cursor-pointer opacity-80 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus-ring-offset-2" 
      >
        <img 
          className="size-8" 
          src={reload} 
          alt="Refresh Quote" 
        />
      </button>
    </section>
  );
}

export default Quote
