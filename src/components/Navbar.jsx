import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-4xl font-signature ml-2 tracking-widest leading-3'>My Portfolio</h1>
      </div>
    </div>
  )
}

export {Navbar}