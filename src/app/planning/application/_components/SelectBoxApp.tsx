"use client";

export default function SelectBoxApp({ title, text, value, data, setData }) {
  return (
    <div className="col-md-4 col-12">
      <button
        style={{
          width: "100%",
          height: "150px",
          borderRadius: "10px",
          borderStyle: "solid",
          backgroundColor: data == value ? "#F5F7FF" : "white",
          borderWidth: "2px",
          borderColor: data == value ? "#314FC0" : "gray",
        }}
        onClick={() => {
          setData(value);
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "600" }}>{title}</div>
        <div style={{ fontSize: "14px", color: "gray" }}>{text}</div>
      </button>
    </div>
  );
}
