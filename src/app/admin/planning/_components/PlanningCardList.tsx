'use client';

import { getPlanning } from '@/actions/apis/planningAPI';
import PlanningCard from '@/app/admin/planning/_components/PlanningCard';
import { useEffect, useState } from 'react';

export default function PlanningCardList() {
  const [planning, setPlanning] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getPlanning();
      if (error) {
        console.log(error);
        return;
      }
      setPlanning(data.data);
    })();
  }, []);
  return (
    <div className="row w-100">
      {planning.length > 0 ? (
        planning.map((e, i) => <PlanningCard key={i} data={e} />)
      ) : (
        <div className="my-5 py-5">
          <h1 className='text-center'>데이터가 존재하지 않습니다.</h1>
        </div>
      )}
    </div>
  );
}
