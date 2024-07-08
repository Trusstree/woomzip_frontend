"use client";

import { getCompanyList, getCompanyConfirm } from "@/actions/apis/Mypage";
import { useEffect, useState } from "react";

export default function CompanyClient() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getCompanyList();
      console.log(data.data);
      setDataList(data.data);
    })();
  }, []);

  return (
    <div>
      {dataList.map((e, i) => (
        <div
          key={i}
          onClick={async () => {
            console.log(e);
            const [data, error] = await getCompanyConfirm(e.company_signup_temp_id);
            if (data) console.log(data);
            if (error) console.error(error);
          }}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
}
