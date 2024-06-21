"use client";

import { SelectBoxComponent } from "@/components/forms/SelectBoxComponent";
import { ChangeEvent } from "react";

type SelectComponentProps = {
  title: string;
  name: string;
  dataList: Array<string>;
  onChange: any;
  className?: string;
};

export function SelectDeliveryComponent(props: SelectComponentProps) {
  const { title, name, dataList, onChange, className } = props;

  const onChangeSelect = (e: ChangeEvent<HTMLInputElement>, title: string) => {
    onChange((oldValues) => {
      if (e.target.checked) return [...oldValues, title];
      else return oldValues.filter((elem) => elem != title);
    });
  };

  return (
    <div className={`${className || ""} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="row">
        {dataList.map((e, i) => (
          <SelectBoxComponent
            key={i}
            name={name}
            title={e}
            onChange={(el) => {
              onChangeSelect(el, e);
            }}
            className={`${className || ""} mx-2 col-2`}
          />
        ))}
      </div>
    </div>
  );
}
