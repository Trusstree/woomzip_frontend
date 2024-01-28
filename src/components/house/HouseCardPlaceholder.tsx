import { truncatedText } from "@/lib/stringUtil";
import Image from "next/image";
import { CSSProperties } from "react";

type MainPagePostProps = {
  className?: string
  style?: CSSProperties
}

export default function HouseCardPlaceholder(props: MainPagePostProps) {
  return (
    <div className="col-3">
      <div className="d-flex flex-column align-items-center w-100">
        <Image
          className="rounded-4 w-100 m-0 p-1"
          src={`/blur_image.png`}
          alt={`placeholdedr`}
          width={250}
          height={250}
          style={{objectFit:"cover"}}
          placeholder={"blur"}
          blurDataURL={"/blur_image.png"} />
          <span className="placeholder" style={{width:"250", height:"250"}}/>
        <div className="w-100 text-left px-1 placeholder-glow">
          <span className="placeholder col-6" />

          <p className="card-text g-3">
            <span className="placeholder col-6" />
            <span className="placeholder col-3" />
            <span className="placeholder col-3" />
          </p>
        </div>
      </div>
    </div>
  );
}