import React from 'react'
import { Card } from './Card';
import PokeVIte from '../assets/PokeVite.jpg'


function Portfolio() {
  const projects=[
    {
      id:1,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: PokeVIte,
      srcgit:'https://github.com/',
      srcweb:'https://github.com/',
      style: "shadow-gray-400",
    },
    {
      id:2,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: PokeVIte,
      srcgit:'',
      srcweb:'',
      style: "shadow-yellow-500",
    },
    {
      id:3,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: PokeVIte,
      srcgit:'',
      srcweb:'',
      style: "shadow-sky-400",
    },
    {
      id:4,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: PokeVIte,
      srcgit:'',
      srcweb:'',
      style: "shadow-blue-600",
    },
    {
      id:5,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: PokeVIte,
      srcgit:'',
      srcweb:'',
      style: "shadow-orange-500",
    },
    
  ]
  return (
    <section
      name="portfolio"
      id="projects"
      className=" bg-gradient-to-b from-black via-black to-gray-800 w-full px-5 pt-20 md:px-20 text-white mx-auto"
    >
      <div className="flex  items-center text-center p-4 max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 p-4 px-1 sm:px-12  max-w-screen-lg mx-auto">
        {projects.map(({ id, title, des, srcgit,srcweb,img,style})=>(
          <Card key={id} title={title} des={des} git={srcgit} demo={srcweb} img={img} shadow={style}/>
        ))}
      </div>
    </section>
  );
}

export {Portfolio}