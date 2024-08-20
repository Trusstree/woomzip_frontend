'use client';

import { SelectBoxComponent } from '@/components/forms/SelectBoxComponent';
import { ChangeEvent, useState } from 'react';

type SelectComponentProps = {
  title: string;
  name: string;
  value: Array<string>;
  dataList: Array<string>;
  onChange: any;
  className?: string;
};

export function HouseSpecificationSelectComponent(props: SelectComponentProps) {
  const { title, name, value, dataList, onChange, className } = props;
  const [disable, setDisable] = useState(false);
  const [dataCheckList, setDataCheckList] = useState(
    dataList.filter((e) => e != '없음').map((e) => [e, false]) as Array<[string, boolean]>,
  );

  const onChangeDefault = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const checked = e.target.checked;
    let res: Array<string>;

    if (title == '없음') {
      res = [];
      if (checked) {
        setDisable(true);
      } else {
        dataCheckList.forEach((e) => {
          if (e[1]) res.push(e[0]);
        });
        setDisable(false);
      }
    } else {
      res = value;
      setDataCheckList((oldValues) => {
        let res = oldValues;
        res.forEach((e) => {
          if (e[0] == title) e[1] = checked;
        });
        return res;
      });

      if (checked) {
        if (!value.includes(title)) res = [...value, title];
      } else {
        if (value.includes(title)) res = res.filter((el) => el != title);
      }
    }
    onChange(res);
  };

  return (
    <div className={`${className || ''} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="d-flex">
        {dataList.map((e, i) => (
          <SelectBoxComponent
            key={i}
            name={name}
            title={e}
            handleChange={onChangeDefault}
            className={`${className || ''} mx-2`}
            disable={e != '없음' && disable}
          />
        ))}
      </div>
    </div>
  );
}
