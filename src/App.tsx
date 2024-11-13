import React, { useEffect, ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publication from './components/Publication';
import AllPublications from './components/AllPublications';
import SkillsDetail from './components/AllExperiences';
import AllAbouts from './components/AllAbout';
import { initGA, logPageView } from './analytics';
import './styles/common.css';
import { UIProvider } from '@yamada-ui/react';

// Define the type for the AnalyticsWrapper props
interface AnalyticsWrapperProps {
  children: ReactNode;
}

// Mapping of paths to titles
const pathTitles: { [key: string]: string } = {
  '/': 'Home',
  '/all-publications': 'All Publications',
  '/all-experiences': 'All Experiences',
  '/all-about': 'All About',
};

const Home: React.FC = () => (
  <>
    <Nav />
    <Profile />
    <About />
    <Publication />
    <Experience />
    <Project />
    <Contact />
    <Footer />
  </>
);

const AllAbout: React.FC = () => (
  <>
    <Nav />
    <AllAbouts />
    <Footer />
  </>
);

const AllPub: React.FC = () => (
  <>
    <Nav />
    <AllPublications />
    <Footer />
  </>
);

const AllExp: React.FC = () => (
  <>
    <Nav />
    <SkillsDetail />
    <Footer />
  </>
);

const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const title = pathTitles[location.pathname] || 'Unknown Page';
    logPageView(title);
  }, [location]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <UIProvider>
      <Router>
        <AnalyticsWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-publications" element={<AllPub />} />
            <Route path="/all-experiences" element={<AllExp />} />
            <Route path="/all-about" element={<AllAbout />} />
          </Routes>
        </AnalyticsWrapper>
      </Router>
    </UIProvider>
  );
};

export default App;

