import '../styles/Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#cta' },
];

const popularServices = [
  { label: 'Deep Cleaning', href: '#services' },
  { label: 'Sofa & Carpet Care', href: '#services' },
  { label: 'Office Cleaning', href: '#services' },
  { label: 'Bathroom & Kitchen', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col footer__col--brand">
          <a href="#home" className="footer__logo">
            HOMYCLEAN 
          </a>
          <p className="footer__brand-tagline">
            Making Your World Shine, One<br />Home At A Time.
          </p>
          <p className="footer__copyright">
            © 2026 HomyClean. All Rights Reserved.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Popular Services</h4>
          <ul className="footer__list">
            {popularServices.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--newsletter">
          <h4 className="footer__col-title">Get Cleaning Tips & Updates</h4>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email" 
              className="footer__input"
              required 
            />
            <button type="submit" className="footer__submit">Subscribe</button>
          </form>
          <p className="footer__spam-note">No Spam, Only Sparkling Ideas!</p>
          
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="X (Twitter)">✕</a>
            <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
            <a href="#" className="footer__social-link" aria-label="Instagram">in</a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">Li</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
