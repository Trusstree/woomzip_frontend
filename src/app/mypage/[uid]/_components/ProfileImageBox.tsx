"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageBoxProps = {
  data: any;
  name: string;
};

export default function ProfileImageBox(props: ImageBoxProps) {
  const { data, name } = props;

  const [src, setSrc] = useState(data[name] || "/blur_image.png");

  useEffect(() => {
    setSrc("rendering");
  }, [data]);

  useEffect(() => {
    if (src != "rendering") return;
    setSrc(data[name] || "/blur_image.png");
  }, [src]);

  return (
    <img
      className={"m-0 align-self-center"}
      src={src}
      alt={`profile`}
      width={180}
      height={180}
      style={{ objectFit: "cover", borderRadius: "90px", width: "180px", height: "180px" }}
      placeholder={"profile"}
      //blurDataURL={"/blur_image.png"}
    />
  );
}
