"use client";

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
      width={100}
      height={70}
      style={{ objectFit: "cover", borderRadius: "90px", width: "70px", height: "70px" }}
      placeholder={"profile"}
      //blurDataURL={"/blur_image.png"}
    />
  );
}
