import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          Custom home<br />cleaning services
        </h1>
        <p className="hero__subtitle">
          From regular house cleaning to deep cleaning and specialized services, we make
          your home sparkle with our professional and reliable cleaning solutions.
        </p>
        <div className="hero__actions">
          <a href="#cta" className="btn-primary hero__btn">
            Book a Service
            <span className="hero__btn-arrow">→</span>
          </a>
          <a href="#services" className="btn-outline hero__btn hero__btn--outline">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
