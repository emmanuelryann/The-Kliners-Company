import '../styles/WhyChooseUs.css';
// import cleaningTable from '../assets/cleaning-table.jpg'
import vacuumCleaner from '../assets/vacuum-cleaner.jpg'
import cleaningFloor from '../assets/cleaning-floor.jpg'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </svg>
    ),
    title: 'Verified Professionals',
    description: 'Trained and uniformed staff for every cleaning task.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
    title: 'Eco-Friendly Products',
    description: 'Safe for your family, pets, and the environment.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
      </svg>
    ),
    title: 'On-Time Guarantee',
    description: 'We respect your schedule and arrive when promised.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="12" y1="2" x2="12" y2="6"></line>
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No hidden charges, pay only for the service you choose.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="wcu-section">
      <div className="wcu reveal">
        <div className="wcu__header">
          <span className="wcu-label section-label">
            &mdash; Why Choose Us
          </span>
          <div className="wcu__header-content">
            <h2 className="wcu__title section-title">
              Trusted By Homes, Loved By Families
            </h2>
            <div className="wcu__header-right">
              <p className="wcu__desc">
                From verified professionals to eco-friendly products, we
                provide reliable, timely, and spotless cleaning services for
                every home and office.
              </p>
              <a href="#cta" className="wcu__btn btn-secondary">
                <span className="wcu__btn-text">Book a Cleaner</span>
                <span className="wcu__btn-icon">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="wcu__content">
          <div className="wcu__gallery">
            <div className="wcu__gallery-main">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" 
                alt="Cleaner vacuuming" 
                className="wcu__img wcu__img--main" 
              />
            </div>
            <div className="wcu__gallery-side">
              <img 
                src={vacuumCleaner} 
                alt="Cleaning table" 
                className="wcu__img wcu__img1" 
              />
              <img 
                src={cleaningFloor} 
                alt="Clean floor" 
                className="wcu__img wcu__img2" 
              />
            </div>
          </div>

          <div className="wcu__features">
            {features.map((feature, idx) => (
              <div key={idx} className="wcu__feature">
                <div className="wcu__feature-icon">
                  {feature.icon}
                </div>
                <h3 className="wcu__feature-title">{feature.title}</h3>
                <p className="wcu__feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
