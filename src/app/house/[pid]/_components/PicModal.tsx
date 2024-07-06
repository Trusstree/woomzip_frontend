import Image from "next/image";

export function PicModal({ id, images }) {
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
        <div
          className="modal-content"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="modal-header">
            <h5 className="modal-title" id={`living_modal_${id}_Label`}>
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
                  }}
                  alt={`image-${i}`}
                  src={e}
                  width={400}
                  height={550}
                  unoptimized={true}
                />
              ))}
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
