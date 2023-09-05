interface SatisfactionProps {
  item: "소통" | "가격" | "시공결과" | "일정준수" | "A/S"
  text: "매우 만족" | "만족" | "보통" | "불만족" | "매우 불만족"
  className?: string
}

const SatisfactionText = (props: SatisfactionProps) => {
  const { item, text, className } = props;

  const colorMap = new Map();
  colorMap.set("매우 만족", "success");
  colorMap.set("만족", "success");
  colorMap.set("보통", "warning");
  colorMap.set("불만족", "danger");
  colorMap.set("매우 불만족", "danger");

  return (
    <div className={`${className}`} style={{width:"120px"}}>
      <div className="text-center">
        {item}
      </div>
      <div className={`text-center text-${colorMap.get(text)}`}>
        {text}
      </div>
    </div>
  );
};

export default SatisfactionText;
