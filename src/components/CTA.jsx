import '../styles/CTA.css';

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta__overlay"></div>
      <div className="cta__content">
        <h2 className="cta__title">
          Let's Bring Freshness<br />Back to Your Home
        </h2>
        <p className="cta__subtitle">
          Whether it's a one-time deep clean or regular maintenance, our professional team
          is here to make every corner of your home shine. Book your cleaning service today
          and experience the HomyClean difference.
        </p>
        <a href="#home" className="btn-primary cta__btn">
          Get Started Today
          <span className="cta__btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
