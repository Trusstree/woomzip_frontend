"use client"

type InfoCardProps = {
  url: string;
  className?: string;
}

export default function InfoCard(props: InfoCardProps) {
  const { url, className }=props;

  return (
    <div className={`${className} col-4`}>
      <div className={`card rounded-0 border-0`}>
        <h5 className="card-title my-2 text-center">재무 정보</h5>
        <div className="card-body">
          <h5 className="card-title my-2">Card title12</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className=" d-flex justify-content-center">
            <a href={url} className="btn btn-primary">포트폴리오</a>
          </div>
        </div>
      </div>
    </div>
  );
}