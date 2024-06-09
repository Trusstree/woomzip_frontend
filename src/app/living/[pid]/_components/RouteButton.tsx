"use client";

import { useRouter } from "next/navigation";

type RouteButtonProps = {
  url: string;
  text: string;
  className?: string;
};

export function RouteButton(props: RouteButtonProps) {
  const { url, text, className } = props;
  const router = useRouter();

  function handleClick() {
    // e.target.value
    router.push(url);
  }

  return (
    <div
      className={`btn${className ? ` ${className}` : ""}`}
      style={{
        width: "100%",
        height: "50px",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#101648",
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
