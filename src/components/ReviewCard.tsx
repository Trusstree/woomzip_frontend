"use client"

type ReviewCardProps = {
  url: string;
  className?: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  const { url, className }=props;

  return (
    <div className={`${className} col-4`}>
      <div className={`card rounded-0 border-0`}>
        <h5 className="card-title my-2 text-center">시공사 리뷰</h5>
        <div className="row g-0">
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title my-2">Card title12</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title my-2">Card title12</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}