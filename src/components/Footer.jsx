
import React from "react";
import './Footer.css'
import PropTypes from "prop-types";

import devDotToIcon from "../socials/devdotto.svg";
import envelopeIcon from "../socials/envelope.svg";
import gitHubIcon from "../socials/github.svg";
import instagramIcon from "../socials/instagram.svg";
import linkedInIcon from "../socials/linkedin.svg";
import mediumIcon from "../socials/medium.svg";
import twitterIcon from "../socials/twitter.svg";
import youTubeIcon from "../socials/youtube.svg";



const Footer = (props) => {
  const {
    devDotTo,
    email,
  
    instagram,
  
    medium,
 
    twitter,
    youTube,
  } = props;

  return (
    <div id="footer">
      <div className="footer1">
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a
            href={`https://dev.to/${devDotTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}

        <a
          href="https://github.com/123Sangram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
        </a>

        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}

        <a
          href="https://www.linkedin.com/in/sangram-singh-706715272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
        </a>

        {medium && (
          <a
            href={`https://medium.com/@${medium}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="smalll">Created by Sangram Singh</p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
