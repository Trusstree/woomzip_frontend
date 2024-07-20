export default function PartnerCard({ src, title }) {
  return (
    <div
      style={{
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={src}
        style={{
          width: "100%",
          borderRadius: "10px",
          boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
          objectFit: "cover",
        }}
      />
      <div style={{ fontSize: "18px", fontWeight: "500" }}>{title}</div>
    </div>
  );
}
