"use client"

import { useState } from "react"

type SwitchTextComponentProps = {
  data: any
  name: string
  title: string
  onChange: any
  className?: string
}

export function AdminSwitchTextComponent(props: SwitchTextComponentProps) {
  const {data, name, title, onChange, className} = props;
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className={`${className} col-3 d-flex`}>
        <div className="form-check form-switch ps-0 w-100">
          <input
            style={{display:"none"}}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={name} />
          <label
            className="btn form-check-label text-white w-100"
            style={{backgroundColor:check?"#101648":"gray"}}
            onClick={()=>{
              setCheck(!check);
              if(check) data[name]=0;
              else data[name]++;
            }}
            htmlFor={name}>
            {title}
          </label>
        </div>
      </div>
      <input
        className="col-5"
        type='text'
        id={name+"Text"}
        name={name}
        onChange={onChange}
        value={data[name]}
        disabled={!check} />
      <div className={`col-4`} />
    </>
  )
}