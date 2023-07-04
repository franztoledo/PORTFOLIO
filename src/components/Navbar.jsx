import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from '../helpers/links';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const linksScroll = [
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
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-20'>
      <div>
        <h1 className='text-4xl font-signature ml-2 tracking-widest leading-3'>Franz</h1>
      </div>

      <ul className='hidden md:flex'>
        {linksScroll.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex justify-around md:hidden gap-3 align-middle'>
        {links.map(({id, childVar, href})=>(
          <li key={id}>
            <a href={href}>
              {childVar}
            </a>
          </li>
        ))}
      </ul>
      <div 
        onClick={() => setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {linksScroll.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export {Navbar}