import React from 'react'

function Paralax() {
  return (
    <div>
    <div
    className="hero min-h-screen bg-fixed "
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlcnxlbnwwfHwwfHx8MA%3D%3D)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Paralax