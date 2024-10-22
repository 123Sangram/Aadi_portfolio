

import React from "react";
import './About.css'

import image from "../socials/motion-background.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "I'm a UI/UX student studying at Ajay kumar garg engineering college Ghaziabad. I enjoy creating unique and simplistic user interfaces in creative ways.";


const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];


const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        className="Name1">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className='unorder'>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
