type HorizontalScrollProps = {
  children:Array<JSX.Element>
  className?:string
}

export default function HorizontalScroll(props: HorizontalScrollProps) {
  const { children, className } = props;
  return (
    <div className="container-fluid">
      <ul className="card-group card-group-scroll flex-nowrap position-relative overflow-auto">
        {children.map((e, i)=>(<li key={i} className={`list-group-item col-4 mx-3 my-5 ${className?className:""}`}>{e}</li>))} 
      </ul>
    </div>
  );
}