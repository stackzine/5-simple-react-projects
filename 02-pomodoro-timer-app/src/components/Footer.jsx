function Footer() {
  return (
    <footer role="contentinfo">
      <ul>
        <li className="text-center text-xs text-[#76789A]">
          Made with <span className="text-red-400">love</span> by&nbsp;
          <a 
            className="hover:underline focus:underline focus:outline-0" 
            href="https://stackzine.com/" 
            title="Made by Stackzine" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Stackzine 
            <span className="sr-only">(open in new tab)</span>
          </a>
        </li>
        <li className="text-center text-xs text-[#76789A]">
          Sound Effect by&nbsp;
          <a 
            href="https://pixabay.com/users/jeremayjimenez-28887262/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=266492"
            target="_blank"
            rel="noopener noreferrer"  
          >
            Jeremay Jimenez&nbsp;
            <span className="sr-only">(open in new tab)</span>
          </a>from&nbsp;
          <a 
            href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=266492"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixabay
            <span className="sr-only">(open in new tab)</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
