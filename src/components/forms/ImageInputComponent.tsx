"use client"

import { useUser } from "@/app/ContextSession";
import { getUserCookie } from "@/lib/cookieUtil";
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
  // const { data: session } = useSession();
  // const { userContext } = useUser();
  const userCookie = getUserCookie();
  
  const setS3Image = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title=e.target.name+moment().format('YYYYMMDDHHmmss');
    const url=`${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${userCookie.userData.uid}/${title}`;
    
    const [response, error] = await setS3Url(`houses/${userCookie.userData.uid}/${title}`, img);
    if(!error) {
      setData((oldValues) =>({...oldValues, [name]: (oldValues?.[name])?[...oldValues[name], url]:[url]}));
    }
    else console.error(error);
  };

  return (
    <div className={`${className ?? ""}`}>
      
      <label htmlFor={name}>
        <img
          src={"/blur_image.png"}
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
