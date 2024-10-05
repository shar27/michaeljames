import React from 'react'

function BottomFooter() {
    const title = 'Michael James Property';
    const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-black bg-white font-bold "><p>© {title} {currentYear}</p></div>
  )
}

export default BottomFooter