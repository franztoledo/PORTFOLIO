import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <FaBars/>
    </div>
  )
}

export {Navbar}