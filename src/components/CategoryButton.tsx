"use client";

import useQuery from "@/hooks/useQuery";
import { usePathname, useRouter } from "next/navigation";

export default function CategoryButton({
  title,
  imgSrc,
  category,
}: {
  title: string;
  imgSrc: string;
  category?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { createQuery, getParamsString } = useQuery();
  const handleClick = () => {
    createQuery("category", category);
    router.push(`${pathname}?${getParamsString()}`);
  };

  return (
    <div className="btn" style={{ width: "auto" }} onClick={handleClick}>
      <div style={{ width: "65px", height: "37px" }}>
        <img src={imgSrc} width={30}></img>
      </div>
      <div style={{ fontSize: "15px" }}>{title}</div>
    </div>
  );
}
