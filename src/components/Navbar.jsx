import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-4xl font-signature ml-2 tracking-widest leading-3'>My Portfolio</h1>
      </div>

      <ul className='flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>home</li>
      </ul>
    </div>
  )
}

export {Navbar}