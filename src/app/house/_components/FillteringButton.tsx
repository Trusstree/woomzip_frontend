"use client";

export default function FillteringButton({
  title,
  type,
  value,
  name,
  data,
  setData,
  setIsSubmit,
}) {
  const handleClick = () => {
    if (type === "select") {
      let newValue = data[name];
      if (!newValue) {
        newValue = [value];
      } else if (newValue.includes(value)) {
        const ind = newValue.indexOf(value);
        newValue = newValue.filter((_, i) => i !== ind);
      } else {
        newValue = [...newValue, value];
      }
      setData((oldValue) => ({ ...oldValue, [name]: newValue }));
    } else {
      setData((oldValue) => ({ ...oldValue, [name]: value }));
    }
    setIsSubmit(true);
  };

  return (
    <div
      className="btn"
      style={{
        width: "auto",
        borderRadius: "10px",
        borderStyle: "solid",
        margin: "3px",
        padding: "10px 15px",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:
          data[name] === value ||
          (type === "select" && data[name]?.includes(value))
            ? "#F5F7FF"
            : "white",
        borderWidth: "2px",
        borderColor:
          data[name] === value ||
          (type === "select" && data[name]?.includes(value))
            ? "#314FC0"
            : "gray",
      }}
    >
      <div onClick={handleClick}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "600",
            wordBreak: "keep-all",
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
{
  /* <MobileView
        className="btn"
        style={{
          width: "40px", // 모바일에서 가로폭을 다르게 설정
          height: "35px",
          padding: "0",
          margin: "2px",
          borderRadius: "10px",
          borderStyle: "solid",
          textAlign: "center",
          backgroundColor:
            data[name] === value || (type === "select" && data[name]?.includes(value)) ? "#F5F7FF" : "white",
          borderWidth: "2px",
          borderColor: data[name] === value || (type === "select" && data[name]?.includes(value)) ? "#314FC0" : "gray",
        }}
      >
        <div onClick={handleClick} style={{ fontSize: "15px", fontWeight: "400", color: "gray", marginTop: "4px" }}>
          {title}
        </div>
      </MobileView> */
}
