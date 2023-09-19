type data = {
  src: string
  label: string
  expl: string
}

type CarouselProps = {
  height: number
  data: data[]
  className: string
}

export default function Carousel(props: CarouselProps){
  const { height, data, className } = props;

  return (
    <div id="Carousel" className={`carousel slide ${className}`}>
      <div className="carousel-indicators">
        {data.map((e, i)=>(
          <button
            type="button"
            data-bs-target="#Carousel"
            data-bs-slide-to={`${i}`}
            className={(i==0)?"active":""}
            aria-current={(i==0)?"true":"false"}
            aria-label={`Slide ${i+1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        <button className="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev" style={{ mixBlendMode: "difference"}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next" style={{ mixBlendMode: "difference"}}>
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>

        {data.map((e, i)=>(
          <div className={`carousel-item ${i==0?"active":""}`}>
            <img src={e.src} className="d-block w-100" alt="truss_logo.png" height={height}/>
            <div className="carousel-caption d-none d-md-block text-start fw-bold text-white" >
              <h5>{e.label}</h5>
              <p>{e.expl}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}