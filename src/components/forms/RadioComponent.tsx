import { RadioButtonComponent } from '@/components/forms/RadioButtonComponent';

type RadioComponentProps = {
  title: string;
  name: string;
  value: any;
  data: Array<any>;
  onChange: Function;
  className?: string;
  essential?: string;
};

export function RadioComponent(props: RadioComponentProps) {
  const { title, name, value, data, onChange, className, essential } = props;
  return (
    <div className={`${className || ''} my-2 d-flex flex-column`}>
      <span className="" style={{ fontSize: '17px' }}>
        {essential && <span style={{ color: 'red' }}>{essential}</span>}
        {title}
      </span>
      <div className="d-flex">
        {data.map((e, i) => (
          <RadioButtonComponent
            key={i}
            name={name}
            title={e.title}
            data={e.data}
            onChange={onChange}
            className={`${e.className || ''} mx-2`}
            checked={value == e.data}
          />
        ))}
      </div>
    </div>
  );
}
