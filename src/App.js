import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-3 text-center bg-dark text-white">
        <small>&copy; 2026 Ritu Saxena. Built with React & Bootstrap.</small>
      </footer>
    </div>
  );
}

export default App;
