'use client';

import { SelectBoxComponent } from '@/components/forms/SelectBoxComponent';
import { ChangeEvent, useState } from 'react';

type SelectComponentProps = {
  title: string;
  name: string;
  value: { default: Array<string>; etc: string };
  dataList: Array<string>;
  onChange: any;
  className?: string;
};

export function HouseSelectComponent(props: SelectComponentProps) {
  const { title, name, value, dataList, onChange, className } = props;
  const [ETC, setETC] = useState(true as any);

  const onChangeDefault = (e: ChangeEvent<HTMLInputElement>) => {
    let def = value.default;
    if (e.target.checked) {
      if (!value.default.includes(e.target.value)) def = [...value.default, e.target.value];
    } else {
      if (value.default.includes(e.target.value)) def = def.filter((el) => el != e.target.value);
    }

    onChange({
      default: def,
      etc: value.etc,
    });
  };

  const checkChangeETC = () => {
    setETC(!ETC);
    if (!ETC) {
      onChange({
        default: value.default,
        etc: '',
      });
    }
  };

  const onChangeETC = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      default: value.default,
      etc: e.target.value,
    });
  };

  return (
    <div className={`${className || ''} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="row">
        <div className="col-7 d-flex">
          {dataList.map((e, i) => (
            <SelectBoxComponent
              key={i}
              name={name}
              title={e}
              handleChange={onChangeDefault}
              className={`${className || ''} mx-2`}
            />
          ))}
        </div>
        <div className="col-5 d-flex">
          <input
            className="form-check-input"
            type="checkbox"
            id={`${name}_etc`}
            value={ETC}
            onChange={checkChangeETC}
          />
          <label className="ms-2 fs-5 form-check-label" htmlFor={`${name}_etc`}>
            기타
          </label>
          <input
            className="mx-3 w-75 h-100"
            type="text"
            id={`${name}_etc_input`}
            name={name}
            onChange={onChangeETC}
            value={name['etc']}
            disabled={ETC}
          />
        </div>
      </div>
    </div>
  );
}
