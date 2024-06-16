import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


import './styles/common.css';


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

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/all-publications' element={<AllPub />} />
        <Route path='/all-experiences' element={<AllExp />} />
      </Routes>
    </Router>
  );
};

export default App;

