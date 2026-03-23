import React from 'react';
import { Button } from '@heroui/react';
import { Search, Users, ArrowRight } from 'lucide-react';
import { educationDetails, interests } from '../data/aboutData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-8 text-center border-b border-border">
      <p className="text-lg text-muted-foreground mb-2">Get To Know More</p>
      <h1 className="text-3xl font-bold text-foreground mb-12">About Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start w-full">
        <div className="flex justify-center w-full h-full">
          <img
            src="/assets/about/about-pic.jpg"
            alt="Profile picture"
            className="rounded-2xl object-cover w-full max-w-sm min-h-[20rem]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start w-full h-full">
          <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4 text-center w-full min-h-[20rem]">
            <div className="flex justify-center gap-2">
              <Search size={24} className="text-foreground" />
              <span className="text-xl font-semibold text-foreground">Interests</span>
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              {interests.map((interest, index) => (
                <span key={index} className="font-semibold">{interest.item}</span>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4 text-center w-full min-h-[20rem]">
            <div className="flex justify-center gap-2">
              <Users size={24} className="text-foreground" />
              <span className="text-xl font-semibold text-foreground">Education</span>
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              {educationDetails.map((edu, index) => (
                <div key={index} className="text-left">
                  <span className="font-semibold">{edu.degree}</span>
                  <p className="text-muted-foreground text-sm">
                    @{edu.institution}, {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-foreground mt-8">
        I am a Ph.D. student at the University of Tokyo in Japan.
      </p>

      <a href="/#/all-about" className="inline-block mt-8">
        <Button
          variant="primary"
          size="lg"
        >
          View My Profiles! <ArrowRight size={18} />
        </Button>
      </a>
    </section>
  );
};

export default About;
