import React from 'react';
import profilePic from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faKaggle, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProfileSection.css';
import '../styles/Sections.css';
import '../styles/Icons.css';
import '../styles/Buttons.css';

// Define the type for account objects
interface Account {
  icon: any; // Use appropriate type for FontAwesome icons
  link: string; }

// Array of account objects
const accounts: Account[] = [
  { icon: faGithub, link: 'https://github.com/mei28' },
  { icon: faXTwitter, link: 'https://x.com/_mei28_' },
  { icon: faKaggle, link: 'https://www.kaggle.com/mei2828' },
  { icon: faSpeakerDeck, link: 'https://www.kaggle.com/mei2828' },
  { icon: faLinkedin, link: 'https://linkedin.com/' },
];

// Function to render account icons
const renderAccountIcons = (accounts: Account[]): JSX.Element[] => {
  return accounts.map((account, index) => (
    <FontAwesomeIcon
      key={index}
      icon={account.icon}
      size="2x"
      className="icon"
      onClick={() => (window.location.href = account.link)}
    />
  ));
};

// Profile component
const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Mingzhe Yang</h1>
        <p className="section__text__p2">
          Ph. D. student <br />@The University of Tokyo
        </p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/path/to/resume.pdf')}
          >
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = '#contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact Info
          </button>
        </div>
        <div id="socials-container">{renderAccountIcons(accounts)}</div>
      </div>
    </section>
  );
};

export default Profile;

