import Image from "next/image";

export function ReviewModal({ id, date, comment, tag, images, nickname }) {
  return (
    <div
      className="modal fade"
      id={`living_modal_${id}`}
      aria-labelledby={`living_modal_${id}_Label`}
      aria-hidden="true"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ width: "100%", height: "100%" }}>
          <div className="modal-header">
            <h5 className="modal-title" id={`living_modal_${id}_Label`}>
              전체사진({images.length})
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {images.map((e, i) => (
                <Image
                  key={i}
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    width: "50%",
                    margin: "10px",
                  }}
                  alt="main-img"
                  src={e}
                  width={400}
                  height={600}
                  unoptimized={true}
                />
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <div style={{ width: "auto" }}>
              {nickname} |<span style={{ width: "auto" }}> {date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
