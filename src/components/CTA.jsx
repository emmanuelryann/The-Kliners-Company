import '../styles/CTA.css';

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta">
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
                ✨
              </div>
              <p className="cta__card-text">
                Schedule a cleaning today with our trusted professionals
                and enjoy a spotless, fresh home without any hassle.
              </p>
              <button className="cta__btn btn-secondary">
                <span className="cta__btn-text">Book a Cleaner</span>
                <span className="cta__btn-icon">↗</span>
              </button>
            </div>
          </div>
          <div className="cta__right">
            <img 
              src="https://images.unsplash.com/photo-1527515637462-cff94eebd21c?w=1000&q=80" 
              alt="Cleaners working" 
              className="cta__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
