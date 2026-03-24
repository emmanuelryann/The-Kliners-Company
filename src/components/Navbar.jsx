import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Pricing', href: '#process' },
  { label: 'Testimonial', href: '#testimonials' },
];

export default function Navbar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [sideNavOpen]);

  const handleNavClick = () => {
    setSideNavOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo">
            <span className="navbar__logo-icon">●</span>
            <span className="navbar__logo-text">HOMYCLEAN</span>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#cta" className="navbar__cta btn-primary">Contact Us</a>

          <button
            className={`navbar__hamburger${sideNavOpen ? ' navbar__hamburger--active' : ''}`}
            onClick={() => setSideNavOpen(!sideNavOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
            <span className="navbar__hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${sideNavOpen ? ' sidebar-overlay--visible' : ''}`}
        onClick={() => setSideNavOpen(false)}
      ></div>

      {/* Side Navigation */}
      <aside className={`sidenav${sideNavOpen ? ' sidenav--open' : ''}`}>
        <div className="sidenav__header">
          <a href="#home" className="navbar__logo" onClick={handleNavClick}>
            <span className="navbar__logo-icon">●</span>
            <span className="navbar__logo-text">HOMYCLEAN</span>
          </a>
          <button
            className="sidenav__close"
            onClick={() => setSideNavOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>
        <ul className="sidenav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="sidenav__link" onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="sidenav__cta btn-primary" onClick={handleNavClick}>
          Contact Us
        </a>
      </aside>
    </>
  );
}
