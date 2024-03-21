import Image from "next/image";
import { ChangeEventHandler } from "react";

type ImageBoxProps = {
  title: string
  data: any
  id: string
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string
}

export default function ImageBox(props: ImageBoxProps) {
  const {title, id, data, name, onChange, className} = props;

  return (
    <div className={`${className && ""} py-3 mb-3 d-flex flex-column`}>
      <label>
        {title}
      </label>
      <div>
        <label htmlFor={id}>
          <Image
            className={"mx-0 my-4 align-self-left"}
            src={data[name] || "/blur_image.png"}
            alt={name}
            width={180}
            height={180}
            style={{objectFit:"cover", borderRadius: "90px", width:"180px", height:"180px"}}
            placeholder={"blur"}
            blurDataURL={"/blur_image.png"} />
        </label>
      </div>
      <input
        id={id}
        name={name}
        style={{ display: 'none' }}
        accept="image/*"
        multiple
        type="file"
        onChange={onChange} />
    </div>
  );
}