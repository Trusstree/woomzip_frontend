"use client";

import { Children } from "@/type/props";
import { useRouter } from "next/navigation";
import ReviewCompanyStyles from "./ReviewCompany.module.css"; // Import the CSS file

type ReviewCompanyProps = {
  title?: string;
  children?: Children;
  className?: string;
  href?: string;
};

export default function ReviewCompany(props: ReviewCompanyProps) {
  const { title, children, className, href } = props;
  const router = useRouter();

  return (
    <div
      className={`${className ? className : ""} 
      ${ReviewCompanyStyles["card-container"]} shadow rounded-4`}
      onClick={href ? () => router.push(href) : undefined}
      style={{ cursor: href ? "pointer" : "auto" }}
    >
      {title && <h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>}
      <div className="card-text mx-3">{children}</div>
    </div>
  );
}
