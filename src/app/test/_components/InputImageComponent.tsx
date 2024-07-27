"use client";

import { deleteS3Url, setS3Url } from "@/lib/s3Util";
import imageCompression from "browser-image-compression";
import moment from "moment";

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export default function InputImageComponent({ s3Url, name, images, setImages }) {
  const handleChange = async (e) => {
    const files = Array.from(e.target.files) as Array<File>;
    const imgs = files.filter((ee) => ee?.type?.split("/")[0] == "image");

    imgs.forEach(async (e, i) => {
      const compressedImage = await imageCompression(e, options);
      const title = "images" + moment().format(`YYYYMMDDHHmmss`) + `${i}`;
      const url = `${s3Url}/${title}.${e.type.split("/")[1]}`;
      const [response, error] = await setS3Url(url, compressedImage);
      if (error) {
        console.error(error);
        return;
      }

      setImages((oldValues) => [...oldValues, `${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`]);
    });
  };

  const deleteImage = async (index) => {
    const url = images[index].split(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/`)[1];
    console.log(url);

    await deleteS3Url(url);
    setImages((oldValues) => oldValues.filter((_, i) => i != index));
  };

  return (
    <div>
      <div>
        <label htmlFor={`images_${name}`}>
          <div className="btn btn-secondary btn-lg">클릭하여 추가</div>
        </label>
        <input
          id={`images_${name}`}
          style={{ display: "none" }}
          accept={"image/*"}
          type={"file"}
          onChange={handleChange}
          multiple
        />
      </div>
      <div className="row flex-nowrap overflow-auto">
        {images.map((e, i) => (
          <div className="col-2 card p-0 mx-3" key={i}>
            <img className={"card-img-top"} src={e} alt={`images ${name} ${i}`} />
            <div className="card-img-overlay p-0">
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-lg"
                  style={{ backgroundColor: "#cc1100" }}
                  onClick={() => {
                    deleteImage(i);
                  }}
                >
                  <span className="w-100 text-white">X</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
