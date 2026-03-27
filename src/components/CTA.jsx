import '../styles/CTA.css';
import ctaImage from '../assets/cta-image2.jpg'

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta reveal">
        <div className="cta__content">
          <div className="cta__left">
            <span className="section-label">
              &mdash; Book Your Cleaner
            </span>
            <h2 className="cta__title section-title">
              Your Home Deserves<br />A Sparkle
            </h2>
            
            <div className="cta__card">
              <div className="cta__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.344l-.707-.707"></path>
                  <path d="M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"></path>
                </svg>
              </div>
              <p className="cta__card-text">
                Schedule a cleaning today with our trusted professionals
                and enjoy a spotless, fresh home without any hassle.
              </p>
              <button className="cta__btn btn-secondary">
                <span className="btn-text">Book a Cleaner</span>
                <span className="btn-icon"><span>↗</span></span>
              </button>
            </div>
          </div>
          <div className="cta__right">
            <img 
              src={ctaImage} 
              alt="Cleaners working" 
              className="cta__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
