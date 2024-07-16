export default function Badge({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#314FC0",
        borderRadius: "40px",
        width: "120px",
        height: "40px",
        textAlign: "center",
        color: "white",
        fontSize: "23px",
        fontWeight: "600",
        padding: "5px 0",
        marginBottom: "30px",
      }}
    >
      {children}
    </div>
  );
}
