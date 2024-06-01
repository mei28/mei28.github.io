import React from 'react';
import '../styles/ProfileSection.css';


const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">John Doe</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resume)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedInIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href = 'https://github.com/'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
