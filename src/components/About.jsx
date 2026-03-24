import '../styles/About.css';

const checklistItems = [
  'Professionally Trained Team',
  'Eco-Friendly Cleaning Products',
  'Satisfaction Guaranteed',
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1,200+', label: 'Completed Cleanings' },
  { value: '100%', label: 'Service Commitment' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <span className="section-label">
              <span className="dot"></span> About Us
            </span>
            <h2 className="section-title about__title">
              Bringing Freshness, Comfort, and Care to Every Home
            </h2>
            <p className="section-subtitle about__desc">
              At HomyClean, we believe that a clean home is a happy home. Our dedicated team
              of cleaning professionals brings years of experience, top-quality products, and
              a commitment to excellence to every job.
            </p>
            <ul className="about__checklist">
              {checklistItems.map((item) => (
                <li key={item} className="about__checklist-item">
                  <span className="about__check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#services" className="btn-primary about__btn">Learn More</a>
          </div>
          <div className="about__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80"
              alt="Professional cleaner"
              className="about__image"
            />
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
