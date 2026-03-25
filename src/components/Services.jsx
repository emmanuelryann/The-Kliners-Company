import '../styles/Services.css';

const services = [
  {
    title: 'Sofa And Carpet Refresh',
    description: 'Remove Stains, Odors, And Bring Back Comfort To Your Furniture.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    title: 'Complete Deep Home Cleaning',
    description: 'Thorough Dusting, Mopping, And Sanitizing To Keep Your Home Fresh.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80',
  },
  {
    title: 'Professional Office Cleaning',
    description: 'Keep Work Areas Spotless, Organized, And Boost Team Productivity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
  },
  {
    title: 'Bathroom & Kitchen Shine',
    description: 'Deep Scrubbing To Remove Grime And Germs From Tough Corners.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services">
        <div className="services__header">
          <span className="section-label">
            &mdash; Our Services
          </span>
          <div className="services__header-content">
            <h2 className="services__title section-title">
              Freshness At Your<br />Fingertips
            </h2>
            <div className="services__header-right">
              <p className="services__desc">
                From everyday home cleaning to specialized care for
                carpets, sofas, and workspaces our team makes every
                corner shine. Choose the service that fits your space and
                let us do the rest.
              </p>
            </div>
          </div>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="services__card">
              <div className="services__card-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__card-image"
                />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
