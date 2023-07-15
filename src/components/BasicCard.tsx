"use client"

type CardProps = {
  url: string;
  className?: string;
}

export default function BasicCard(props: CardProps) {
  const { url, className }=props;

  return (
    <div className={`${className} col-3 col-md-4 col-sm-6`}>
      <div className={`card rounded-0 border-0`}>
        <img src="image1.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="card-body">
          <h5 className="card-title my-2">Card title12</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={url} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}