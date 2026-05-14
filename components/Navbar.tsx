'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <span>S</span>S
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul className={isOpen ? 'open' : ''}>
          <li>
            <a
              href="#hero"
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#languages"
              className={activeSection === 'languages' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Languages
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#extras"
              className={activeSection === 'extras' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Activities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
