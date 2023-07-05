import React from 'react'
import { Card } from './Card';
import PokeVIte from '../assets/PokeVite.jpg'
import WeatherApp from '../assets/WeatherApp.jpg'
import MovieApp from '../assets/MovieApp.jpg'
import TodoApp from '../assets/TodoApp.jpg'
import Form from '../assets/Form.jpg'
import VideoPlay from '../assets/VideoPlay.png'

function Portfolio() {
  const projects=[
    {
      id:1,
      title: "POKEVITE",
      des:" A Pokedex with search engine, filter and favorites. Made with React and Vite.",
      img: PokeVIte,
      srcgit:'https://github.com/',
      srcweb:'https://github.com/',
      style: "shadow-gray-400",
    },
    {
      id:2,
      title: "Weather App",
      des:"A single weather app that displays the weather forecast for the next 5 days on a given location.",
      img: WeatherApp,
      srcgit:'https://github.com/franztoledo/weather-app',
      srcweb:'https://weather-app-bice-mu.vercel.app/',
      style: "shadow-yellow-500",
    },
    {
      id:3,
      title: "Form and Konami",
      des:"A form that requests information of a different type implementing my own Konami code.",
      img: Form,
      srcgit:'https://github.com/franztoledo/FORM-JS',
      srcweb:'https://form-js-xi.vercel.app/',
      style: "shadow-yellow-500",
    },
    {
      id:4,
      title: "MovieAPI",
      des:"A mobile movie website made with DOM manipulation and REST APIs",
      img: MovieApp,
      srcgit:'https://github.com/franztoledo/CURSO-API-PRACTICO',
      srcweb:'https://franztoledo.github.io/CURSO-API-PRACTICO/',
      style: "shadow-sky-400",
    },
    {
      id:5,
      title: "Play JavaScript",
      des:"A video game made with canva and basic knowledge of JavaScrip",
      img: VideoPlay,
      srcgit:'https://github.com/franztoledo/Taller-Practico-JS-VideoJuego',
      srcweb:'https://franztoledo.github.io/Taller-Practico-JS-VideoJuego/',
      style: "shadow-blue-600",
    },
    {
      id:6,
      title: "TODO App",
      des:"A TODO App made with ReactJS, with all the functionalities and basic knowledge of React.",
      img: TodoApp,
      srcgit:'https://github.com/franztoledo/curso-react-intro',
      srcweb:'https://franztoledo.github.io/curso-react-intro/',
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