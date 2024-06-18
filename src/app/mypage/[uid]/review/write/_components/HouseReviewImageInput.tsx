"use client";

import { setS3Url } from "@/lib/s3Util";
import moment from "moment";
import { ChangeEvent } from "react";
import { useUser } from "../../../../../ContextSession";

type HouseReviewImageInputComponentProps = {
  name: string;
  setData: any;
  className?: string;
};

export function HouseReviewImageInputComponent(
  props: HouseReviewImageInputComponentProps
) {
  const { name, setData, className } = props;
  const { userContext } = useUser();
  const uid = userContext?.uid;

  const setS3Image = async (e: ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title = e.target.name + moment().format("YYYYMMDDHHmmss");
    const url = `${process.env.NEXT_PUBLIC_AWS_S3_URL}/test_house/pavilion/1/${uid}/${title}`;

    const [response, error] = await setS3Url(
      `test_house/pavilion/1/${uid}/${title}`,
      img
    );
    if (!error) {
      setData((oldValues) => [...oldValues, url]);
    } else console.error(error);
  };

  return (
    <div className={className ? className : ""}>
      <label htmlFor={name}>
        <img
          src={"/blur_image.png"}
          alt={name}
          width={188}
          height={188}
          style={{ objectFit: "fill" }}
        />
      </label>
      <input
        id={`${name}`}
        name={name}
        accept="image/*"
        multiple
        type="file"
        onChange={setS3Image}
        style={{ display: "none" }}
      />
      <h5 className="fw-bold mt-2">추가하기</h5>
    </div>
  );
}
