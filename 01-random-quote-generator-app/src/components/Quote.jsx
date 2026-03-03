import quotes from '../assets/quotes.png'
import reload from '../assets/reload.png'
import { useQuote } from '../hooks/useQuote'

function Quote() {
  const { loading, quote, error, refresh } = useQuote()

  return (
    <section className="text-center">
      <img className="mx-auto size-25" src={quotes} alt="quotes icon" />
      
      {loading && <p className="font-medium text-gray-500 py-5">Loading...</p>}
      {!loading && quote && (
        <>
          <p className="text-white text-3xl pt-4 pb-2">{quote?.quote}</p>
          <p className="font-medium text-gray-500 pb-5">{quote?.author}</p>
        </>
      )}
      {error && <p className="text-white text-3xl py-4">{error}</p>}
      
      <button 
        disabled={loading} 
        className="cursor-pointer" 
        onClick={refresh}
      >
        <img 
          className="size-8 opacity-80 hover:opacity-100" 
          src={reload} 
          alt="Refresh Quote" 
        />
      </button>
    </section>
  );
}

export default Quote
