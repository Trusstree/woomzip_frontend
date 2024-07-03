import Link from "next/link";

type RouteButtonProps = {
  url: string;
  text: string;
  className?: string;
};

export function RouteButton(props: RouteButtonProps) {
  const { url, text, className } = props;

  return (
    <Link
      className={`btn${className ? ` ${className}` : ""}`}
      style={{
        width: "90%",
        height: "50px",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        marginLeft: "5%",
        backgroundColor: "#314FC0",
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        textAlign: "center",
      }}
      href={url}
    >
      {text}
    </Link>
  );
}
