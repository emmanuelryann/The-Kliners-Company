import '../styles/Hero.css';

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80'
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero reveal">
        <div className="hero__container">
          {/* Left Content */}
          <div className="hero__left">
            <h1 className="hero__title section-title">
              A Clean Home<br />A Fresh Start
            </h1>
            
            <p className="hero__subtitle">
              Professional cleaning you can trust whether it's your<br />
              home, office, or that one messy corner.
            </p>
            
            <div className="hero__actions">
              <a href="#cta" className="hero__explore-btn btn-secondary">
                <span className="hero__explore-text">Book a Cleaner</span>
                <span className="hero__explore-icon">↗</span>
              </a>
            </div>
            
            <div className="hero__review-widget">
              <div className="hero__review-top">
                <div className="hero__review-avatars">
                  {avatarImages.map((src, i) => (
                    <img key={i} src={src} className="hero__review-avatar" alt="Reviewer" />
                  ))}
                </div>
                <div className="hero__review-rating">
                  <span className="hero__review-star">★</span>
                  <span className="hero__review-score">4.5</span>
                  <span className="hero__review-count">( 4,234+ reviews )</span>
                </div>
              </div>
              <p className="hero__review-text">
                Over 500 people have trusted us and left<br />
                positive reviews. Join them!
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero__right">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80" 
              alt="Professional cleaner vacuuming" 
              className="hero__img" 
            />
            <div className="hero__sticker">
              <span className="hero__sticker-number">100+</span>
              <span className="hero__sticker-text">Cleaning Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
