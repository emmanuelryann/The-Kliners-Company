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
            THE KLINERS COMPANY LTD 
          </a>
          <p className="footer__brand-tagline">
            Making Your World Shine, One<br />Home At A Time.
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
            <a href="#" className="footer__social-link" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom border-t">
        <p className="footer__copyright">
          © 2026 The Kliners Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
