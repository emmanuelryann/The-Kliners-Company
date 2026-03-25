import '../styles/Hero.css';

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80'
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__text-block">
            <h1 className="hero__title section-title">
              Custom home<br />cleaning services
            </h1>
            <p className="hero__subtitle">
              Enjoy a spotless space with our trusted cleaning professionals.<br />
              Eco-friendly, flexible, and always on time.
            </p>
            <div className="hero__actions">
              <a href="#cta" className="hero__btn-primary btn-primary">
                Book Now
              </a>
              <a href="#services" className="hero__btn-text">
                See Our Services
              </a>
            </div>
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
      </div>
    </section>
  );
}
