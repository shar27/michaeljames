import React from 'react'

function Button({text, color, bgColor}) {
  return (
    // <button className="text-white bg-black border 
    // border-white p-3 w-48 text-xl font-bold">{text}</button>

    <button className={` border border-white p-3 w-48 text-xl font-bold ${color} ${bgColor} `}>
      {text}
    </button>
  )
}

export default Button