import '../styles/Footer.css';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#process' },
];

const whatWeOffer = ['Kitchen', 'Office', 'Residential', 'Deep Cleaning'];

const support = ['FAQ', 'Help Center', 'Contact Us', 'Feedback'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="navbar__logo-icon">●</span>
              <span className="footer__logo-text">HomyClean</span>
            </a>
            <p className="footer__brand-desc">
              Crafting clean and comfortable homes is what we do. Trust HomyClean for all
              your cleaning needs — reliable, professional, and always spotless.
            </p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__column-title">Navigation</h4>
              <ul className="footer__column-list">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer__column-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">What Links</h4>
              <ul className="footer__column-list">
                {whatWeOffer.map((item) => (
                  <li key={item}>
                    <a href="#services" className="footer__column-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Support</h4>
              <ul className="footer__column-list">
                {support.map((item) => (
                  <li key={item}>
                    <a href="#cta" className="footer__column-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__watermark">
          <span className="footer__watermark-text">HOMYCLEAN</span>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© HomyClean, All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-sep">·</span>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
