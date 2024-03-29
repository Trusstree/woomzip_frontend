"use client"

import { setS3Url } from "@/lib/s3Util";
import moment from "moment";
import { useSession } from "next-auth/react";
import { ChangeEvent } from "react";

type ImageComponentProps = {
  data: any
  name: string
  title: string
  setHouseData: Function
  className?: string
}

export function ImageComponent(props: ImageComponentProps) {
  const { data, name, title, setHouseData, className } = props;
  const { data: session } = useSession();

  const setS3Image = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title=e.target.name+moment().format('YYYYMMDDHHmmss');
    console.log(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${session.user.id}/${title}`);
    const [response, error] = await setS3Url(`houses/${session.user.id}/${title}`, img);
    if(!error) {
      setHouseData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${session.user.id}/${title}`
        }
      ));
    }
    else console.error(error);
  };

  return (
    <div className={`${className && ""} my-3`}>
      
      <label htmlFor={name}>
        <img
          src={data[name] || "/blur_image.png"}
          alt={name}
          width={200}
          height={200}
          style={{objectFit:"fill"}} />
      </label>
      <input
        id={name}
        name={name}
        accept="image/*"
        multiple
        type="file"
        onChange={setS3Image}
        style={{ display: 'none' }}/>
      <h5 className="fw-bold mb-4">{title}</h5>
    </div>
  );
}