import Image from "next/image";
import { toStringByFormatting } from "@/lib/stringUtil";

export function ReviewModal({
  id,
  date,
  images,
  nickname,
  isTwoCol,
}: {
  id: string;
  images: any[];
  date?: Date;
  nickname?: string;
  isTwoCol?: boolean;
}) {
  return (
    <div
      className="modal fade"
      id={id}
      aria-labelledby={`${id}_Label`}
      aria-hidden="true"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-fullscreen">
        <div
          className="modal-content"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}_Label`}>
              전체사진({images.length})
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {images.map((e, i) => (
                <Image
                  key={i}
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    width: "48%",
                    margin: "1%",
                    padding: "0",
                    height: "auto",
                  }}
                  alt={`image-${i}`}
                  src={e}
                  width={400}
                  height={100}
                  unoptimized={true}
                />
              ))}
            </div>
          </div>
          {nickname && date && (
            <div className="modal-footer">
              <div style={{ width: "auto" }}>
                {nickname && `${nickname} |`}{" "}
                <span style={{ width: "auto" }}>
                  {" "}
                  {date && toStringByFormatting(date)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
