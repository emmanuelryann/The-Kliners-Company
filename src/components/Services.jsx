import '../styles/Services.css';

const services = [
  {
    title: 'Kitchen Cleaning',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    title: 'Office Cleaning',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',
  },
  {
    title: 'Residential Cleaning',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80',
  },
  {
    title: 'Deep Cleaning',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="section-label">
            <span className="dot"></span> Our Services
          </span>
          <h2 className="section-title">
            Complete Home and Office Cleaning You Can Trust
          </h2>
          <p className="section-subtitle">
            We offer a full range of residential and commercial cleaning services,
            tailored to meet your unique needs and exceed your expectations every time.
          </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
