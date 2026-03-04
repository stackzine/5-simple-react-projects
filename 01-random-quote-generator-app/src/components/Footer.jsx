function Footer() {
  const attributions = [
    {
      id: 1,
      url: 'https://www.flaticon.com/free-icons/quotes',
      title: 'quotes icons',
      text: 'Quotes icons created by Iconjam - Flaticon',
    },
    {
      id: 2,
      url: 'https://www.flaticon.com/free-icons/reload',
      title: 'reload icons',
      text: 'Reload icons created by Pixel perfect - Flaticon',
    },
    {
      id: 3,
      url: 'https://dummyjson.com',
      title: 'quotes',
      text: 'Quotes by DummyJSON',
    },
  ]
  return (
    <footer className="text-center text-gray-400 text-xs">
      <ul>
        {attributions.map(attribution => 
          <li key={attribution.id}>
            <a
              className="hover:underline focus:underline focus:outline-none" 
              href={attribution.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {attribution.text}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
