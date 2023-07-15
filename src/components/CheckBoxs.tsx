type CheckBoxsProps = {
  className: string
  title: string
  children: Array<string>
}

export default function CheckBoxs(props: CheckBoxsProps) {
  const { className, title, children } = props;

  return (
    <div className={`${className} d-flex flex-column`}>
      <h3 className="p-2 border border-primary text-black text-center rounded">{title}</h3>
      {children.map((e, i)=>
        (
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="inlineCheckboxOptions" id={`inlineCheckbox${i}`} value={`e`}/>
            <label className="form-check-label" htmlFor={`inlineCheckbox${i}`}>{e}</label>
          </div>
        )
      )}
    </div>
  )
}