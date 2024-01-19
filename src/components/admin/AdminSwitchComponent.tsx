type AdminSwitchComponentProps = {
  data: any
  name: string
  title: string
  onChange: any
  className?: string
}

export function AdminSwitchComponent(props: AdminSwitchComponentProps) {
  const {data, name, title, onChange, className} = props;
  return (
    <div className={`${className} d-flex`}>
      <div className="form-check form-switch ps-0 w-100">
        <input
          style={{display:"none"}}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id={name}
          value={data[name]=="yes"?"no":"yes"}
          name={name}
          onChange={onChange}/>
        <label
          className="btn form-check-label text-white w-100"
          style={{backgroundColor:data[name]=="no"?"gray":"#101648"}}
          htmlFor={name}>
          {title}
        </label>
      </div>
    </div>
  )
}