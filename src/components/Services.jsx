import '../styles/Services.css';
import couchCleaning from '../assets/couch-cleaning.jpg'
import sinkCleaning from '../assets/sink-cleaning.jpg'

const services = [
  {
    title: 'Residential / home cleaning',
    description: 'Professional cleaning for your living spaces, ensuring a spotless and healthy home environment for you and your family.',
    image: couchCleaning,
  },
  {
    title: 'Post-construction cleaning',
    description: 'Specialized cleaning to remove dust, debris, and residue after renovation or new builds, making your space ready for use.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80',
  },
  {
    title: 'Commercial / office cleaning',
    description: 'Customized cleaning solutions for workspaces, offices, and commercial buildings to maintain a professional and hygienic atmosphere.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
  },
  {
    title: 'Sanitation and disinfection cleaning',
    description: 'Deep sanitization using industry-grade disinfectants to eliminate germs and viruses, keeping your environment safe.',
    image: sinkCleaning,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services reveal">
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
