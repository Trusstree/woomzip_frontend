"use client"

import { setS3Url } from "@/lib/s3Util";
import moment from "moment";
import { useSession } from "next-auth/react";
import { ChangeEvent } from "react";

type ImageInputComponentProps = {
  data: any
  name: string
  setData: any
  className?: string
}

export function ImageInputComponent(props: ImageInputComponentProps) {
  const { data, name, setData, className } = props;
  const { data: session } = useSession();

  const setS3Image = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title=e.target.name+moment().format('YYYYMMDDHHmmss');
    const url=`${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${session.user.id}/${title}`;
    console.log(url);
    
    const [response, error] = await setS3Url(`houses/${session.user.id}/${title}`, img);
    console.log(error);
    if(!error) {
      setData((oldValues) =>([...oldValues, {url:url, name:name}]));
    }
    else console.error(error);
  };

  return (
    <div className={`${className ?? ""}`}>
      
      <label htmlFor={name}>
        <img
          src={data[name] || "/blur_image.png"}
          alt={name}
          width={188}
          height={188}
          style={{objectFit:"fill"}} />
      </label>
      <input
        id={`${name}`}
        name={name}
        accept="image/*"
        multiple
        type="file"
        onChange={setS3Image}
        style={{ display: 'none' }}/>
      <h5 className="fw-bold mt-2">추가하기</h5>
    </div>
  );
}
