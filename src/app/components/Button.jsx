import React from 'react'

function Button({text, color, bgColor, padding}) {
  return (
   

    <button className={` border border-white ${padding} w-52 text-xl font-bold ${color} ${bgColor} `}>
      {text}
    </button>
  )
}

export default Button