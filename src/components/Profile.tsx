import React from 'react';
import { Button } from '@heroui/react';
import { FileText, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import { accounts, Account } from '../data/profileData';
import { getLucideIcon } from '../utils/icons';

const AccountIcon: React.FC<{ account: Account }> = ({ account }) => {
  if (account.iconType === 'fontawesome') {
    return <FontAwesomeIcon icon={faKaggle} size="2x" />;
  }
  const Icon = getLucideIcon(account.iconName);
  return Icon ? <Icon size={32} /> : null;
};

const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="bg-background min-h-[50vh] flex justify-center items-center py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/assets/profile.png"
          alt="profile"
          className="w-80 h-80 md:w-64 md:h-64 rounded-full object-cover"
        />

        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div>
            <p className="text-lg font-semibold">Hello, I'm</p>
            <p className="text-4xl md:text-3xl font-bold text-foreground">Mingzhe Yang</p>
            <p className="text-2xl md:text-xl font-semibold my-4">
              Ph.D. student <br />@The University of Tokyo
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onPress={() => window.open('/path/to/resume.pdf', '_blank')}
            >
              <FileText size={18} /> Download CV
            </Button>
            <Button
              className="bg-foreground text-background hover:opacity-80"
              onPress={() => {
                const section = 'contact';
                if (location.pathname === '/') {
                  const element = document.getElementById(section);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.location.href = `/#${section}`;
                }
              }}
            >
              <Mail size={18} /> Contact Info
            </Button>
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            {accounts.map((account, index) => (
              <a key={index} href={account.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-foreground hover:text-foreground/70 transition-colors">
                <AccountIcon account={account} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
