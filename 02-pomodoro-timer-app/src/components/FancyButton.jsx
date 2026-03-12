function FancyButton({ name, focus, onclick}) {
  return (
    <button
      onClick={onclick}
      className={`relative cursor-pointer text-2xl text-[#CFD5F3] hover:text-white 
      transition-transform duration-300 ease-in-out
      ${focus ? 'scale-125 before:opacity-20 text-white' : 'scale-90 before:opacity-0'}
      
      before:content-['']
      before:absolute
      before:-right-1
      before:-bottom-1
      before:w-8
      before:h-8
      before:bg-[#FF6B6B]
      before:rounded-full
      before:-z-10
      before:transition-opacity
      before:duration-300`}
    >
      {name}
    </button>
  )
}

export default FancyButton