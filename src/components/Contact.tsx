import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import '../styles/common.css';

interface ContactInfo {
  icon: IconDefinition;
  link?: string;
  text: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: faEnvelope,
    text: 'mingzhe-yang [at] g.ecc.u-tokyo.ac.jp'
  },
  {
    icon: faXTwitter,
    link: 'https://x.com/_mei28_',
    text: 'Twitter (JP)'
  },
  {
    icon: faSquareXTwitter,
    link: 'https://x.com/_me_i28',
    text: 'Twitter (EN)'
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/mingzhe-yang-3669242bb/',
    text: 'LinkedIn'
  }
];

const renderContactInfo = (contactInfo: ContactInfo[]): JSX.Element[] => {
  return contactInfo.map((info, index) => (
    <div key={index} className="flex items-center justify-center gap-2 p-4">
      <FontAwesomeIcon icon={info.icon} className='text-xl' />
      {info.link ? (
        <p><a href={info.link} className="text-gray-700 hover:text-gray-500">{info.text}</a></p>
      ) : (
        <p className="text-gray-700">{info.text}</p>
      )}
    </div>
  ));
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <p className="section-subtitle">Get in Touch</p>
      <h1 className="section-title">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center border border-gray-500 bg-gray-50 rounded-2xl my-8 p-4">
        {renderContactInfo(contactInfo)}
      </div>
    </section >
  )
};

export default Contact;

