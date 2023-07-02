import React from 'react'
import HeroImage from '../assets/heroimage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Fronted Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus at aut ea facilis laborum corrupti nihil iure, sit incidunt provident quaerat minus nesciunt neque eius ab beatae. Odio, amet cum.</p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Home}