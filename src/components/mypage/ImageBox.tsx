"use client";

import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";

type ImageBoxProps = {
  title: string;
  data: any;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function ImageBox(props: ImageBoxProps) {
  const { title, id, data, name, onChange, className } = props;

  const [src, setSrc] = useState(data[name] || "/blur_image.png");

  useEffect(() => {
    setSrc("rendering");
  }, [data]);

  useEffect(() => {
    if (src != "rendering") return;
    setSrc(data[name] || "/blur_image.png");
  }, [src]);

  return (
    <div className={`${className && ""} py-3 mb-3 d-flex flex-column`}>
      <label>{title}</label>
      <div>
        <label htmlFor={id}>
          <img
            className={"mx-0 my-4 align-self-left"}
            src={src}
            alt={name}
            width={180}
            height={180}
            style={{ objectFit: "cover", borderRadius: "90px", width: "180px", height: "180px" }}
            placeholder={"blur"}
            // blurDataURL={"/blur_image.png"}
          />
        </label>
      </div>
      <input
        id={id}
        name={name}
        style={{ display: "none" }}
        accept="image/*"
        multiple
        type="file"
        onChange={onChange}
      />
    </div>
  );
}
