type PostCardProps = {
  className?: string
}

export default function PostCardPlaceHolder(props: PostCardProps) {
  const { className } = props;

  const bgColor="#AAAAAA";
  
  return (
    <div className={`${className?className:""} col-md-4 col-lg-3 fs-6`}>
      <div className="card rounded-3" style={{backgroundColor:bgColor, borderColor:bgColor}}>
        <div className={`card-header pb-2`}style={{borderColor:bgColor}}>
          <p className="D-flex justify-content-between mt-2 placeholder-glow">
            <span className="placeholder">카테고리</span>
            <span className="placeholder">0000-00-00</span>
          </p>
        </div>
        <div className="card-body pt-3 mb-0">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder me-3 col-6"></span>
            <span className="placeholder col-3"></span>
            <span className="placeholder me-3 col-5"></span>
            <span className="placeholder col-5"></span>
            <span className="placeholder me-3 col-3"></span>
            <span className="placeholder me-3 col-2"></span>
            <span className="placeholder col-4"></span>
          </p>
        </div>
        <div
          className={`card-footer rounded-bottom-3`}style={{borderColor:bgColor}}>
          <div style={{height:"25px"}}>
          </div>
        </div>
      </div>
    </div>
  );
}