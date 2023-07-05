import React from 'react'

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen px-5 md:px-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My future is Tech. I have discovered new skills and reinforced the ones I had, such as creativity. I am a Fronted Development using technologies like HTML, CSS, JS, ReactJS, Tailwind and SCSS. And my goal is to continue to learn more about this IT world.
        </p>

      </div>
    </div>
  )
}

export {About}