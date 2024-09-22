import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { VscGithubInverted } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);
        el.classList.toggle('is-visible', isVisible);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          <main>
            <section id="home">
              <h1 className="animate-title">
                <span>FULL STACK</span>
                <span>DEVELOPER</span>
              </h1>
              <p className="animate-tagline">Crafting elegant solutions for complex problems.</p>
              <div className="social-icons">
                <a href="https://github.com/hamza9021" target="_blank" rel="noopener noreferrer" className="icon-link github">
                  <VscGithubInverted />
                </a>
                <a href="https://www.linkedin.com/in/hamza-riaz-b094a9299/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
                  <FaLinkedinIn />
                </a>
              </div>
            </section>
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
