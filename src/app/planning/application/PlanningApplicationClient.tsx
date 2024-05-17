"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import SelectBox2 from "@/components/planning/SelectBox2";
import { useSearchParams } from "next/navigation";
import { alertError } from "@/lib/alertUtil";

export default function PlanningApplicationClient() {
  const [planningData, setPlanningData] = useState({});
  const [service, setService] = useState("");
  const [timeline, setTimeline] = useState("");
  const [finance, setFinance] = useState("");

  const params = useSearchParams();

  useEffect(() => {
    setPlanningData((oldValues) => ({ ...oldValues, service: service, timeline: timeline, finance: finance }));
  }, [service, timeline, finance]);

  useEffect(() => {
    const res = {};
    params.forEach((value, key) => {
      res[key] = value;
    });
    setPlanningData(res);
  }, []);

  const submit = useCallback(() => {
    if (service.length == 0) {
      alertError("service", "service 이 선택되지 않았어요!");
      return;
    }
    if (timeline.length == 0) {
      alertError("timeline", "timeline 이 선택되지 않았어요!");
      return;
    }
    if (finance.length == 0) {
      alertError("finance", "finance 이 선택되지 않았어요!");
      return;
    }
    console.log(planningData);
  }, [service, timeline, finance]);

  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>어떤 도움이 필요하신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>같이 고민해드릴게요</div>
        <SelectBox2
          title={"안심 계약"}
          text={"계약과정을 안심할 수 있습니다."}
          value={"안심계약"}
          data={service}
          setData={setService}
        />
        <SelectBox2
          title={"이해관계자 연결"}
          text={"건축사, 토목사 등을 이어드립니다."}
          value={"이해관계자 연결"}
          data={service}
          setData={setService}
        />
        <SelectBox2
          title={"통합 패키지"}
          text={"모든 과정을 밀착 관리합니다."}
          value={"통합 패키지"}
          data={service}
          setData={setService}
        />
      </div>

      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>언제 시작하실 계획이신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>대략적인 기간을 알려주세요</div>
        <SelectBox2
          title={"최대한 빠르게"}
          text={"4~10주 내"}
          value={"최대한 빠르게"}
          data={timeline}
          setData={setTimeline}
        />
        <SelectBox2 title={"1년 이내"} text={"12주 내"} value={"1년 이내"} data={timeline} setData={setTimeline} />
        <SelectBox2
          title={"계획 없음"}
          text={"견적만 알아보기"}
          value={"계획 없음"}
          data={timeline}
          setData={setTimeline}
        />
      </div>

      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>
          건축비를 위해 도움이 필요하신가요?
        </div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>은행권 대출을 연계해드립니다</div>
        <SelectBox2
          title={"필요 없습니다."}
          text={"스스로 확보하겠습니다."}
          value={"안심계약"}
          data={finance}
          setData={setFinance}
        />
        <SelectBox2
          title={"고민 중입니다."}
          text={"연계 서비스를 확인해보겠습니다."}
          value={"이해관계자 연결"}
          data={finance}
          setData={setFinance}
        />
        <SelectBox2
          title={"필요합니다."}
          text={"금융 서비스에 관심이 있습니다."}
          value={"통합 패키지"}
          data={finance}
          setData={setFinance}
        />
      </div>
      <button
        onClick={submit}
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#101648",
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        제출
      </button>
    </>
  );
}
