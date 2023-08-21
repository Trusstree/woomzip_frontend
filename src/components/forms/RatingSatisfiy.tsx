import React from "react";

interface SatisfactionProps {
  text: "매우 만족" | "만족" | "보통" | "불만족" | "매우 불만족";
}

const SatisfactionText = ({ text }: SatisfactionProps) => {
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
      text = "불만족"
      break;
    case "매우 불만족":
      textColor = "red";
      break;
    default:
      textColor = "black";
  }

  return <span><p style={{ color: textColor }}>{text}</p></span>;
};

export default SatisfactionText;
