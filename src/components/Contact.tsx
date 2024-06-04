import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
    <div key={index} className="contact-info-container">
      <FontAwesomeIcon icon={info.icon} className='icon contact-icon' />
      {info.link ? (
        <p><a href={info.link}>{info.text}</a></p>
      ) : (
        <p>{info.text}</p>
      )}
    </div>
  ));
};

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {renderContactInfo(contactInfo)}
      </div>
    </section >
  )
};


export default Contact;
