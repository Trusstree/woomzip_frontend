import { Children } from "@/type/props";

type SubmitProps ={
  children:Children
}

export default function Submit (props: SubmitProps) {
  const { children } = props;

  return (
    <button type="button" className="btn text-white" style={{backgroundColor:"#6764F7"}}>
      <span className="fs-5">{children}</span>
    </button>
  )
}