import React from 'react'



function Portfolio() {
  const projects=[
    {
      id:1,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      srcgit:'',
      srcweb:''
    },
    {
      id:2,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      srcgit:'',
      srcweb:''
    },
    {
      id:3,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      srcgit:'',
      srcweb:''
    },
    {
      id:4,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      srcgit:'',
      srcweb:''
    },
    {
      id:5,
      title: "SOCIAL MEDIA CLONE",
      des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      srcgit:'',
      srcweb:''
    },
    
  ]
  return (
    <section
      id="projects"
      className=" h-screen bg-gradient-to-b from-black via-black to-gray-800 w-full px-5 md:px-20 text-white"
    >
      <div className="flex  items-center text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
      </div>
    </section>
  );
}

export {Portfolio}