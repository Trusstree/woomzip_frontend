import { setS3Url } from "@/lib/s3Util";
import moment from "moment";
import { ChangeEvent } from "react";

type ImageInputComponentProps = {
  uid: string | number;
  data: any;
  name: string;
  setData: any;
  className?: string;
};

export function ImageInputComponent(props: ImageInputComponentProps) {
  const { uid, data, name, setData, className } = props;

  const setS3Image = async (e: ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const title = e.target.name + moment().format("YYYYMMDDHHmmss");
    const url = `/houses/${uid}/${title}`;

    const [response, error] = await setS3Url(url, img);
    if (!error) {
      setData((oldValues) => ({
        ...oldValues,
        [name]: oldValues?.[name] ? [...oldValues[name], url] : [`${process.env.NEXT_PUBLIC_AWS_S3_URL}${url}`],
      }));
    } else console.error(error);
  };

  return (
    <div className={`${className ?? ""}`}>
      <label htmlFor={name}>
        <img src={"/blur_image.png"} alt={name} width={188} height={188} style={{ objectFit: "fill" }} />
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
