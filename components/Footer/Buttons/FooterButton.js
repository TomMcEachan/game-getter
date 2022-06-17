import React from 'react'

export default function FooterButton({text}) {
  return (
    <button type="submit" 
    className={`drop-shadow-pop bg-yellow-400 text-black outline-black outline outline-3 text-sm font-bebas pl-3 pr-3 pt-1 pb-1 m-2`}>
        {text}
    </button>    
  )
}
