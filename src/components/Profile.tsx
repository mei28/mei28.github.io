import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faKaggle, faSpeakerDeck, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Account {
  icon: IconDefinition;
  link: string;
}

const accounts: Account[] = [
  { icon: faGithub, link: 'https://github.com/mei28' },
  { icon: faXTwitter, link: 'https://x.com/_mei28_' },
  { icon: faGoogleScholar, link: 'https://scholar.google.com/citations?user=0PIblkcAAAAJ' },
  { icon: faKaggle, link: 'https://www.kaggle.com/mei2828' },
  { icon: faSpeakerDeck, link: 'https://speakerdeck.com/mei28' },
  { icon: faLinkedin, link: 'https://linkedin.com/' },
];

const renderAccountIcons = (accounts: Account[]): JSX.Element[] => {
  return accounts.map((account, index) => (
    <FontAwesomeIcon
      key={index}
      icon={account.icon}
      size="2x"
      className="cursor-pointer"
      onClick={() => (window.location.href = account.link)}
    />
  ));
};

const Profile: React.FC = () => {
  return (
    <section id="profile" className="flex flex-col items-center gap-8 py-16 md:flex-row md:gap-20 h-screen bg-gray-50 justify-center">
      <div className="w-64 h-64 flex justify-center items-center md:w-80 md:h-80">
        <img src="/assets/profile.png" alt="profile" className="rounded-full w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-3xl md:text-4xl font-bold">Mingzhe Yang</h1>
        <p className="text-xl md:text-2xl font-semibold my-4">
          Ph. D. student <br />@The University of Tokyo
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-4">
          <button
            className="bg-transparent border border-black text-black font-semibold py-2 px-4 rounded-full hover:bg-black hover:text-white transition-all"
            onClick={() => window.open('/path/to/resume.pdf')}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download CV
          </button>
          <button
            className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-800 transition-all"
            onClick={() => {
              const section = 'contact';
              if (location.pathname === '/') {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                window.location.href = `/#${section}`;
              }
            }}          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Info
          </button>
        </div>
        <div id="socials-container" className="flex justify-center gap-4 mt-4">
          {renderAccountIcons(accounts)}
        </div>
      </div>
    </section >
  );
};
export default Profile;

