import React from "react";

interface SatisfactionProps {
  item: "소통"|"가격"|"시공결과"|"일정준수"|"A/S"
  text: "매우 만족" | "만족" | "보통" | "불만족" | "매우 불만족";
}

const SatisfactionText = ({ item, text }: SatisfactionProps) => {
  let textColor = "";

  switch (text) {
    case "매우 만족":
      textColor = "green";
      break;
    case "만족":
      textColor = "green";
      break;
    case "보통":
      textColor = "yellow";
      break;
    case "불만족":
      textColor = "red";
      break;
    case "매우 불만족":
      textColor = "red";
      break;
    default:
      textColor = "black";
  }

  return (
    <div style={{ marginRight: "60px" }}>
      {item}
      <span>
        <p style={{ color: textColor }}>
          {text}
        </p>
      </span>
    </div>
  );
};

export default SatisfactionText;
