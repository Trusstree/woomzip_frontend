"use client"

import { useUser } from "@/app/ContextSession";
import { getUserCookie } from "@/lib/cookieUtil";
import { setS3Url } from "@/lib/s3Util";
import moment from "moment";
import { useSession } from "next-auth/react";
import { ChangeEvent } from "react";

type ImageInputComponentProps = {
  data: any
  setData: any
  className?: string
}

export function ImageThumbComponent(props: ImageInputComponentProps) {
  const { data, setData, className } = props;
  // const { data: session } = useSession();
  const userCookie = getUserCookie();

  const setS3Image = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title=e.target.name+moment().format('YYYYMMDDHHmmss');
    const url=`${process.env.NEXT_PUBLIC_AWS_S3_URL}/houses/${userCookie.userData.uid}/${title}`;
    
    const [response, error] = await setS3Url(`houses/${userCookie.userData.uid}/${title}`, img);
    if(!error) {
      setData((oldValues) =>({...oldValues, ["representative_image"]: url}));
    }
    else console.error(error);
  };

  return (
    <div className={`${className ?? ""}`}>
      
      <label htmlFor={"representative_image"}>
        <img
          src={data["representative_image"] || "/blur_image.png"}
          alt={"representative_image"}
          width={188}
          height={188}
          style={{objectFit:"fill"}} />
      </label>
      <input
        id={`${"representative_image"}`}
        name={"representative_image"}
        accept="image/*"
        multiple
        type="file"
        onChange={setS3Image}
        style={{ display: 'none' }}/>
      <h5 className="fw-bold mt-2">추가하기</h5>
    </div>
  );
}
