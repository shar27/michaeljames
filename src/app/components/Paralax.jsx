import React,{useState, useEffect} from 'react'
import Button from './Button'
import { fetchParalax } from '@/lib/contentful'
import Link from 'next/link'

function Paralax() {
  const [paralax, setParalax] = useState([]); // State to store fetched land deals
  // Fetch land deals
  useEffect(() => {
    const getParalax = async () => {
      const paralaxImg = await fetchParalax();
      setParalax(paralaxImg);
      
    };
    getParalax();
  }, []); // Runs only once when component mounts

  return (
    <div>
    <div
    className="hero min-h-screen bg-fixed">
      {paralax.map((p) => (
          <img
            src={`https:${p.fields.paralax.fields.file.url}`} 
            alt="paralax"
            className="bg-fixed min-h-screen"
          />
        ))}
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Guaranteed Rent?</h1>
        <p className="mb-5">
        Are you Landlord or Agent?  Find out more about how I can help create an ideal scenario for you below
        </p>
        <Link href="/Contact">
        <Button text={'Get Started'} bgColor={'bg-black'} color={'text-white'} padding={'p-3'}/>
        </Link>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Paralax