import '../styles/Testimonials.css';

const reviews = [
  {
    name: 'Isabel Moura',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    text: '"Absolutely excellent cleaning! I love the care and attention to detail. The team was friendly, on time, and left my home sparkling."',
  },
  {
    name: 'Yael Martinez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: '"It\'s the first time my apartment has felt this clean. HomyClean really exceeded my expectations."',
  },
  {
    name: 'Haruto Morales',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    text: '"They made my course and semester cleaning effortless. Everything looked and smelled amazing — truly worth it."',
  },
];

function StarRating({ count }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="testimonials__star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container reveal">
        <div className="testimonials__header">
          <div className="testimonials__header-left">
            <div className="testimonials__avatars">
              {reviews.map((r, i) => (
                <img
                  key={i}
                  src={r.avatar}
                  alt={r.name}
                  className="testimonials__avatar-thumb"
                />
              ))}
            </div>
            <div className="testimonials__rating-info">
              <StarRating count={5} />
              <span className="testimonials__rating-text">4.9/5 (500+ reviews)</span>
            </div>
          </div>
          <h2 className="section-title testimonials__title">Over 500 Positive Reviews</h2>
        </div>

        <div className="testimonials__grid">
          {reviews.map((review) => (
            <div key={review.name} className="testimonials__card">
              <StarRating count={review.rating} />
              <p className="testimonials__quote">{review.text}</p>
              <div className="testimonials__author">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="testimonials__author-avatar"
                />
                <span className="testimonials__author-name">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
