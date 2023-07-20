import BasicCard from "./BasicCard";

type CardProps = {
  children:Array<JSX.Element>
}

export default function HorizontalScroll(props: CardProps) {
  const { children } = props;
  return (
    <div className="container-fluid">
      <ul className="card-group card-group-scroll flex-nowrap position-relative overflow-auto">
        {children.map((e)=>(<li className="list-group-item col-4 mx-3 my-5">{e}</li>))} 
      </ul>
    </div>
  );
}