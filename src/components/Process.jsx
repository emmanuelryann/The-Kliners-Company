import '../styles/Process.css';

const steps = [
  {
    number: '01',
    title: 'Book Your Service',
    description: 'Easily select your preferred date, time and cleaning plan through our simple online booking system.',
  },
  {
    number: '02',
    title: 'Confirmation & Preparation',
    description: "We'll confirm the booking and prepare the right equipment, products and supplies needed for your home.",
  },
  {
    number: '03',
    title: 'Wait For The Cleaning',
    description: 'Our expert team arrives at the scheduled time, ready to make your space sparkling clean and fresh.',
  },
  {
    number: '04',
    title: 'Relax & Enjoy',
    description: 'Sit back, relax and experience the comfort of a freshly cleaned home without any of the hassle.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process__container">
        <div className="process__header">
          <h2 className="process__title">Simple Steps to a Cleaner Home</h2>
          <p className="process__subtitle">
            Our cleaning process is simple, quick, and reliable — from booking to enjoying your spotless home.
          </p>
        </div>

        <div className="process__grid">
          {steps.map((step) => (
            <div key={step.number} className="process__step">
              <span className="process__step-number">{step.number}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
