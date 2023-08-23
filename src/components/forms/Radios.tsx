import { ChangeEventHandler, MouseEventHandler } from 'react';

type RadiosProps = {
  children: Array<string>
  id: string;
  label: string;
  disabled: boolean;
  readonly: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick?: MouseEventHandler<HTMLInputElement>;
  name: string;
  value: any;
  error?: string;
}

export default function Radios(props: RadiosProps) {
  const { children, id, name, label, disabled, readonly, handleClick, handleChange, value, error } = props;

  return (
    <div className={`my-4 d-flex flex-column`}>
      <label className="text-white fs-5 fw-bold mb-2">{label}</label>
      {children.map((e, i)=>
        (
          <div className="form-check" key={i}>
            <input
              type='radio'
              className={[`border-${error ? 'danger' : 'white'}`, `input ${error && 'is-danger'}`].join(' ')}
              name={name}
              id={id}
              disabled={disabled}
              readOnly={readonly}
              onClick={handleClick}
              onChange={handleChange}
              value={e}
            />
            <label className="form-check-label text-white fw-bold" htmlFor={`inlineRadio${i}`}>{e}</label>
          </div>
        )
      )}
    </div>
  )
}