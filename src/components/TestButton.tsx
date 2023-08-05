"use client"

import { postBuilder } from "@/api/builderAPI"

type TestButtonProps = {
  url?: string
  children?: string
  className?:string
}

let number=0;

export default function TestButton(props: TestButtonProps) {
  const { className, children } = props;
  return (
  <button type="button"
    style={{backgroundColor:"#6764F7"}}
    className={`${className?className:""} px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
    onClick={async ()=>{
      const { data, error } = await postBuilder({name:"test", url: "truss url"});
      console.log(data);
      number+=1;
      }}>
    {children}
  </button>
  );
}
