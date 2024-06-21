"use client";

import { SelectBoxComponent } from "@/components/forms/SelectBoxComponent";
import { ChangeEvent, useState } from "react";

type SelectComponentProps = {
  title: string;
  name: string;
  dataList: Array<string>;
  onChange: any;
  className?: string;
};

export function SelectComponent(props: SelectComponentProps) {
  const { title, name, dataList, onChange, className } = props;

  const [ETC, setETC] = useState(true as any);

  const onChangeDefault = (e: ChangeEvent<HTMLInputElement>) => {
    onChange((oldValues) => {
      const def = oldValues?.[e.target.name]?.default
        ? [...oldValues?.[e.target.name]?.default, e.target.value]
        : [e.target.value];
      const etc = oldValues?.[e.target.name]?.etc;

      return {
        ...oldValues,
        [e.target.name]: {
          default: def,
          etc: etc,
        },
      };
    });
  };

  const onChangeETC = (e: ChangeEvent<HTMLInputElement>) => {
    onChange((oldValues) => ({
      ...oldValues,
      [e.target.name]: {
        default: oldValues[e.target.name]?.default,
        etc: e.target.value,
      },
    }));
  };

  return (
    <div className={`${className || ""} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="row">
        <div className="col-5 d-flex">
          {dataList.map((e, i) => (
            <SelectBoxComponent
              key={i}
              name={name}
              title={e}
              onChange={onChangeDefault}
              className={`${className || ""} mx-2`}
            />
          ))}
        </div>
        <div className="col-5 d-flex">
          <input
            className="form-check-input"
            type="checkbox"
            id={`${name}_etc`}
            value={ETC}
            onChange={() => {
              setETC(!ETC);
            }}
          />
          <label className="fs-5 form-check-label" htmlFor={`${name}_etc`}>
            기타
          </label>
          <input
            className="mx-3 w-75 h-100"
            type="text"
            id={`${name}_etc_input`}
            name={name}
            onChange={onChangeETC}
            value={name["etc"]}
            disabled={ETC}
          />
        </div>
      </div>
    </div>
  );
}
