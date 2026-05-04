// Testimonial — 5-star card
function Testimonial({ quote, name, stars = 5 }) {
  return (
    <div className="hiha-testimonial">
      <div className="hiha-stars" aria-label={`${stars} of 5`}>
        {Array.from({ length: stars }).map((_, i) => (
          <img key={i} src="../../assets/star.png" alt="" />
        ))}
      </div>
      <div className="hiha-testimonial-quote">{quote}</div>
      <div className="hiha-testimonial-name">{name}</div>
    </div>
  );
}

// UserPainCard — orange-bordered service card
function UserPainCard({ tag = "USER PAIN", title, body }) {
  return (
    <div className="hiha-userpain-card">
      <span className="hiha-userpain-tag">{tag}</span>
      <div className="hiha-userpain-title">{title}</div>
      <p className="hiha-userpain-body">{body}</p>
    </div>
  );
}

Object.assign(window, { Testimonial, UserPainCard });
