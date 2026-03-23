import React from 'react';
import { Link } from '@heroui/react';
import { Mail, Twitter, X, Linkedin } from 'lucide-react';
import { contactInfo, ContactInfo } from '../data/contactData';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Mail, Twitter, X, Linkedin,
};

const ContactItem: React.FC<{ info: ContactInfo }> = ({ info }) => {
  const IconComp = iconMap[info.iconName];

  return (
    <div className="flex items-center justify-center gap-2 p-4">
      {IconComp && <IconComp size={24} />}
      {info.link ? (
        <Link
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground/50 transition-colors"
        >
          {info.text}
        </Link>
      ) : (
        <span className="text-foreground/70 line-clamp-2">{info.text}</span>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-center my-8 mx-8 md:mx-4">
      <p className="text-lg mb-2">Get in Touch</p>
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center border border-border bg-surface rounded-2xl p-4">
        {contactInfo.map((info, index) => (
          <ContactItem key={index} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
