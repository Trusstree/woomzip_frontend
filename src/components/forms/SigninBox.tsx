import { ChangeEventHandler, MouseEventHandler } from 'react';

interface SigninBoxProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLInputElement>;
  name: string;
  value: any;
  error?: string;
}

export default function SigninBox(props: SigninBoxProps) {
  const { id, name, label, type, placeholder, handleClick, handleChange, value } = props;

  return (
    <div className="input-group row g-4" style={{ padding: '0px', margin: '0px' }}>
      <span className="col-2 input-group-text border-dark">{label}</span>
      <input
        type={type || 'text'}
        className={`col-10 form-control border-dark input`}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={false}
        readOnly={false}
        onClick={handleClick}
        onChange={handleChange}
        value={value || ''}
      />
    </div>
  );
}