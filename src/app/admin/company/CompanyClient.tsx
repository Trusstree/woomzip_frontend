"use client";

import { getCompanyList, postCompanyMypage } from "@/actions/apis/Mypage";
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
      {dataList.map((e) => (
        <div
          onClick={async () => {
            await postCompanyMypage(e.company_signup_temp_id, e);
            console.log("asdf");
          }}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
}
