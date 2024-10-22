
import React from "react";
import './Portfolio.css'

import image from "../socials/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "My Movie Website 🎉",
    description:
      "Collebrative and Created from visual sutdio code and deployed in netlify. Includes my experience and design abilities.",
    url: "https://lucent-stardust-25f149.netlify.app/",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Shopping Website",
    description:
      "Created from visual sutdio code and deployed in versel. Includes my experience and design abilities.",
    url: "https://e-commerse-olive.vercel.app/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 className="text">Portfolio</h2>
      <div className="flex1">
        <div className="flex11">
          <img className='image2'
            src={image}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
