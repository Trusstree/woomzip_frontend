import Link from "next/link";
import { CSSProperties } from "react";

type IconProps = {
  title: string;
  pathname: string;
  param?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Icon(props: IconProps) {
  const { title, className, param, style, pathname } = props;
  return (
    <div className={className && ""} style={{ ...style, width: "90px" }}>
      <Link
        type="button"
        style={{ fontWeight: "400", fontSize: "17px" }}
        className={`btn rounded-lg`}
        href={`${pathname}${param ? `?category=${param}` : ``}`}
      >
        {title}
      </Link>
    </div>
  );
}
