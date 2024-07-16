export default function TeamPositionBadge({ children, backgroundColor, color }) {
  return (
    <span
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: "20px",
        padding: "2px 7px",
        marginRight: "5px",
      }}
    >
      {children}
    </span>
  );
}
