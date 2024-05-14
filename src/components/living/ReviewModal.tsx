import { badgeStyles } from "@/lib/badgeStyles";
import Image from "next/image";

export function ReviewModal({ date, comment, tag, images }) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: 500 }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {date}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row flex-nowrap overflow-auto">
              {images.map((e, i) => (
                <Image
                  key={i}
                  className="card-img-top"
                  style={{ borderRadius: "10px", objectFit: "cover", width: 300, height: 300 }}
                  alt="main-img"
                  src={e}
                  width={400}
                  height={400}
                  unoptimized={true}
                />
              ))}
            </div>
            <div
              className="container my-4"
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                marginLeft: "0",
                fontWeight: "500",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                whiteSpace: "pre-wrap",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 8,
              }}
            >
              {comment}
            </div>
          </div>
          <div className="modal-footer">
            {tag.map((badge, index) => (
              <span
                className="badge"
                key={index}
                style={{
                  width: "auto",
                  padding: "10px",
                  marginRight: "5px",
                  backgroundColor: badgeStyles(badge),
                  color: "white",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
