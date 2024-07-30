"use client";

import { getPlanning } from "@/actions/apis/planningAPI";
import PlanningCard from "@/app/admin/planning/_components/PlanningCard";
import { useEffect, useState } from "react";

export default function PlanningCardList() {
  const [planning, setPlanning] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getPlanning();
      if (error) {
        console.log(error);
        return;
      }
      console.log(data.data);
      setPlanning(data.data);
    })();
  }, []);
  return (
    <>
      {planning.map((e) => (
        <PlanningCard data={e} />
      ))}
    </>
  );
}
