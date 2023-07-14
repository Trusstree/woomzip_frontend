"use client"

type CardProps = {
  className?: string;
  style?: object;
}

export default function BasicCard(props: CardProps) {
  const { className, style }=props;
  ///
  return (
    <div
      className={className?className:"col-lg-4 col-md-3 col-sm-2"}
      style={style?style:{width: "18rem"}}>

      <img src="image1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title12</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      
    </div>
  );
}