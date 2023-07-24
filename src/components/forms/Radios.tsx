type RadiosProps = {
  className: string
  title: string
  children: Array<string>
}

export default function Radios(props: RadiosProps) {
  const { className, title, children } = props;

  return (
    <div className={`${className} d-flex flex-column`}>
      <h3 className="p-2 border border-primary text-black text-center rounded">{title}</h3>
      {children.map((e, i)=>
        (
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio${i}`} value={e}/>
            <label className="form-check-label" htmlFor={`inlineRadio${i}`}>{e}</label>
          </div>
        )
      )}
    </div>
  )
}