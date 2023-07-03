import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/franz-toledo-181a70280/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/franztoledo",
  },
  {
    id: 3,
    child: (
      <>
        Instagram <FaInstagram size={30} />
      </>
    ),
    href: "https://www.instagram.com/franz.toledo.04/",
    style: "rounded-br-md"
  },
  
];

export {links}