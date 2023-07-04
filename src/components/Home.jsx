import React from 'react'
import HeroImage from '../assets/heroimage2.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function Home() {
  const [text] = useTypewriter({
    words: ["<Hi, the name is Franz Toledo/>", "I'm a Fronted Developer", ">.Guy Who Loves To Code"],
    loop: true,
    
    delaySpeed: 2000,
  });
  return (
    <div
      name="home"
      className="pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-7 md:px-20 md:flex-row">
        <div className="flex flex-col justify-center align-middle w-full h-full gap-4 text-center xl:gap-8 xl:">
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className=" mx-auto w-72 sm:w-1/3 rounded-full object-contain xl:w-80 "
            />
          </div>
          <h3 className="text-3xl tracking-widest  text-[#8db0b7] text-center">WELCOME TO MI WOLRD</h3>
          
          <h2 className="text-4xl md:text-5xl text-white font-bold pt-4 h-28 md:h-20">
            <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export {Home}