import React from 'react';
import profilePic from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProfileSection.css';
import '../styles/Sections.css';
import '../styles/Icons.css';
import '../styles/Buttons.css';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Mingzhe Yang</h1>
        <p className="section__text__p2">Ph. D. student <br />@The University of Tokyo</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/path/to/resume.pdf')}
          >
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = '#contact'}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact Info
          </button>
        </div>
        <div id="socials-container">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/mei28'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;

