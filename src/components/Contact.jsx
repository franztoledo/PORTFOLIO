import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import {TbMapPinFilled} from 'react-icons/tb'
import { GrMail} from 'react-icons/gr'

function Contact() {
  return (
    <div
      name="contact"
      className="w-full px-5 md:px-20 bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20 z-0"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className='space-y-10 mb-8 pb-6'>
          <div className='flex items-center space-x-5 justify-center'>
            <FaPhoneAlt className='text-sky-300 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
            <p className=' text-lg md:text-xl'>+51 935565755</p>
          </div>
              
          <div className='flex items-center space-x-5 justify-center'>
            <GrMail className=' text-sky-300 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
            <p className='text-lg md:text-xl'>franz.wilber.tm@gmail.com</p>
            </div>

          <div className='flex items-center space-x-5 justify-center'>
            <TbMapPinFilled className='text-sky-300 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
            <p className='text-lg md:text-xl'>Lima, Peru</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/87436779-7771-48d0-9374-df0d5694939f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none z-0"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export {Contact}