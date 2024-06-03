import './styles/App.css'
import Nav from './components/Nav';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publication from './components/Publication';

import './styles/Sections.css';
import './styles/Icons.css';
import './styles/Buttons.css';

function App() {
  return (
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
  )
}

export default App
