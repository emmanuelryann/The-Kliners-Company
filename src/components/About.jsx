import '../styles/About.css';
import aboutUsImage from '../assets/about-us-image.jpg'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about reveal">
        <div className="about__header">
          <span className="about-label section-label">
            &mdash; About Us
          </span>
          <div className="about__header-content">
            <h2 className="about__title section-title">
              More Than Cleaning We<br />Care For Your Space
            </h2>
            <div className="about__header-right">
              <p className="about__desc">
                We started with a simple belief: a clean home brings a clear mind.
                From humble beginnings with a small team, today we proudly serve
                hundreds of homes and offices, delivering spotless results with
                care, honesty, and eco-friendly solutions.
              </p>
              <a href="#services" className="about__explore-btn btn-secondary">
                <span className="about__explore-text">Explore us</span>
                <span className="about__explore-icon">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about__grid">
          {/* Group 1: Image and Stats (Left Side) */}
          <div className="about__grid-left">
            <div className="about__col about__col--image">
              <img
                src={aboutUsImage}
                alt="Professional cleaner mopping"
                className="about__img"
              />
            </div>

            <div className="about__col about__col--stats">
              <div className="about__stat-box about__stat-box--light">
                <h3 className="about__stat-title">6+ <span className="about__stat-unit">Years</span></h3>
                <p className="about__stat-desc">
                  Customer Satisfaction<br />With Every Service
                </p>
              </div>
              <div className="about__stat-box about__stat-box--dark">
                <h3 className="about__stat-title">500+</h3>
                <p className="about__stat-desc">
                  Delivering Spotless Results<br />With Every Visit
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Testimonial/Quote */}
          <div className="about__col about__col--quote">
            <span className="about__quote-icon">”</span>
            <p className="about__quote-text">
              HomyClean turned my messy apartment into a fresh, spotless space in just a few hours. Their team was friendly, on time, and truly professional. I finally feel comfortable at home again!
            </p>
            <div className="about__author">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Rafiq Ahmed"
                className="about__author-img"
              />
              <div className="about__author-info">
                <h4 className="about__author-name">Rafiq Ahmed</h4>
                <p className="about__author-title">Digital Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
