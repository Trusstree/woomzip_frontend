'use client';

import FilterBadge from '@/app/test/4/_components/FilterBadge';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const badgeList = [
  'min_price',
  'max_price',
  'floor_area_min',
  'floor_area_max',
  'room_count',
  'toilet_count',
  'floor_count',
  'estimate_duration',
  'warranty',
  'tag',
  'is_hut',
  'has_model',
  'specificity',
  'frame'
];

export default function FilterBadgeList() {
  
  const searchParams=useSearchParams();
  const [FilterBadges, setFilterBadges] = useState([]);

  useEffect(()=>{
    (async ()=>{
      let res=Object.entries(Object.fromEntries(searchParams)) as Array<string|Array<string>|any>;
      let [minp, maxp, minf, maxf]=[undefined,undefined,undefined,undefined];
  
      for await (let e of res){
        if(e[0]=="min_price"){minp=e[1];}
        if(e[0]=="max_price"){maxp=e[1];}
        if(e[0]=="floor_area_min"){minf=e[1];}
        if(e[0]=="floor_area_max"){maxf=e[1];}
      };
  
      res=res.filter((e)=>
        (e[0]!="min_price")&&(e[0]!="max_price")&&(e[0]!="floor_area_min")&&(e[0]!="floor_area_max")
      );
      if(minp && maxp) res.push([["min_price","max_price"], [minp, maxp]]);
      if(minf && maxf) res.push([["floor_area_min","floor_area_max"], [minf, maxf]]);
      setFilterBadges(res);
    })();
  },[searchParams]);

  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: '10px 0' }}>
      <div
        className="d-flex flex-nowrap overflow-auto"
        style={{ height: '25px', paddingLeft: '10px', width: '3000px' }}
      >
        {FilterBadges.filter((e) => badgeList.includes(e[0]) || badgeList.includes(e[0][0])).map((e, i) => (
          <FilterBadge key={i} name={e[0]} value={e[1]} />
        ))}
      </div>
    </div>
  );
}
