import { useState } from "react";

export function Rating({ rating, setRating }) {
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[...Array(10)].map((_, index) => {
        const starValue = (index + 1) / 2;
        return (
          <button
            type="button"
            key={index}
            className={starValue <= (hover || rating) ? "on" : "off"}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color: starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              background: "none",
              border: "none",
              padding: 0,
            }}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
