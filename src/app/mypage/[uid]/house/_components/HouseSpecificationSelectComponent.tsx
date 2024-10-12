'use client';

import { SelectBoxComponent } from '@/components/forms/SelectBoxComponent';
import { ChangeEvent, useEffect, useState } from 'react';

type SelectComponentProps = {
  title: string;
  name: string;
  value: Array<string>;
  dataList: Array<string>;
  onChange: any;
  className?: string;
  essential?: boolean;
};

export function HouseSpecificationSelectComponent(props: SelectComponentProps) {
  const { title, name, value, dataList, onChange, className, essential } = props;
  const [def, setDef] = useState(value);

  const onChangeDefault = (e: ChangeEvent<HTMLInputElement>) => {
    let res: Array<string>;
    const title = e.target.value;
    if(def.includes(title)) setDef(def.filter((e)=>e!=title));
    else setDef((val)=>[...val, title]);
  };

  useEffect(()=>{
    onChange({default:def});
  }, [def]);

  return (
    <div className={`${className || ''} my-2 d-flex flex-column`}>
      <span className="" style={{ fontSize: '17px' }}>
        {essential && <span style={{ color: 'red' }}>* </span>}
        {title}
      </span>
      <div className="d-flex">
        {dataList.map((e, i) => (
          <SelectBoxComponent
            key={i}
            name={name}
            title={e}
            onChange={onChangeDefault}
            className={`mx-2`}
            checked={def.includes(e)}
          />
        ))}
      </div>
    </div>
  );
}
