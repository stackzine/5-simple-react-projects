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
      {attributions.map(attribution => 
        <p key={attribution.id}>
          <a href={attribution.url} title={attribution.title} target="_blank" rel="noopener noreferrer">{attribution.text}</a>
        </p>
      )}
      
    </footer>
  )
}

export default Footer
