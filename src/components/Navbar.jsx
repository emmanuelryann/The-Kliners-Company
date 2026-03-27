import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logoImage from '../assets/kliners-logo2.png';

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
    const mediaQuery = window.matchMedia('(min-width: 65.01rem)');
    const handleResize = (e) => {
      if (e.matches) {
        setSideNavOpen(false);
      }
    };
    
    // Initial check
    if (mediaQuery.matches) setSideNavOpen(false);

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!sideNavOpen) return;

    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');

    const preventDefault = (e) => {
      if (!e.target.closest('.sidenav')) {
        if (e.cancelable) e.preventDefault();
      }
    };

      document.addEventListener('touchmove', preventDefault, { passive: false })

    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      document.removeEventListener('touchmove', preventDefault);
    };
  }, [sideNavOpen]);

  const handleNavClick = () => {
    setSideNavOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#" className="navbar__logo">
            <img src={logoImage} alt="The Kliners Company Logo" className="navbar__logo-img" />
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

          <a href="#cta" className="btn-primary navbar__cta">Contact Us</a>

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
          <a href="#" className="sidenav__logo" onClick={handleNavClick}>
            <span className="navbar__logo-text">THE KLINERS <br /> COMPANY</span>
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
    </div>
  );
}
