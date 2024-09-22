import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" data-scroll-section ref={aboutRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <p>Hello! I'm Hamza Riaz, a passionate Full-Stack Developer based in Lahore, Pakistan. Currently, I'm pursuing my degree in Computer Science at Comsats University Islamabad, Sahiwal, where I'm honing my skills and expanding my knowledge in the world of technology.</p>
        <p>My journey in web development has equipped me with a robust skill set, including expertise in Data Structures and Algorithms (Java) and a solid foundation in Web Development technologies. I'm proficient in HTML, CSS, JavaScript, Node.js, MySQL, MongoDB, Express, and React, allowing me to create dynamic and responsive web applications.</p>
        <p>Beyond coding, I'm deeply fascinated by the transformative power of technology in our world. In my free time, you'll find me delving into history books or exploring the fundamental principles of physics. I'm a firm believer in the power of continuous learning and always excited to take on new challenges in the ever-evolving field of web development.</p>
      </div>
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="icon-row">
          <img src="https://skillicons.dev/icons?i=html,css,bootstrap,javascript,react,mongodb,nodejs,express,java,cpp,tensorflow,pytorch" alt="Tech Stack" />
        </div>
      </div>
    </section>
  );
}

export default About;