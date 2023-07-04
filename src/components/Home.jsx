import React from 'react'
import HeroImage from '../assets/heroimage2.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
function Home() {
  return (
    <div
      name="home"
      className="pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-20 md:flex-row">
        <div className="flex flex-col justify-center align-middle h-full gap-8 text-center">
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className=" mx-auto w-80 mt-9 rounded-full object-contain "
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white text-center">I'm a Fronted Developer</h2>
          <p className="text-gray-500 py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus at aut ea facilis laborum corrupti nihil iure, sit incidunt provident quaerat minus nesciunt neque eius ab beatae. Odio, amet cum.</p>
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