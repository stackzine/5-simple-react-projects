function FancyButton({ name, focus, ariaKey, onclick}) {
  return (
    <button
      onClick={onclick}
      aria-keyshortcuts={ariaKey}
      title={`Press ${ariaKey.toUpperCase()} for ${ariaKey === 'f' ? 'Focus mode' : 'Break mode'}`}
      className={`relative cursor-pointer text-2xl text-[#CFD5F3] hover:text-white 
      transition-transform duration-300 ease-in-out motion-reduce:transition-none
      ${focus ? `scale-125 before:opacity-20 text-white` : 'scale-90 before:opacity-0'}
      
      before:content-['']
      before:absolute
      before:-right-1
      before:-bottom-1
      before:w-8
      before:h-8
      before:bg-[#009AD9]
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