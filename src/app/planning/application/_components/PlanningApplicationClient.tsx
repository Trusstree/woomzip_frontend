"use client";

import React, { useCallback, useEffect, useState } from "react";
import SelectBoxApp from "@/app/planning/application/_components/SelectBoxApp";
import { useSearchParams } from "next/navigation";
import { alertError } from "@/lib/alertUtil";
import { postPlanning } from "@/actions/apis/planningAPI";

export default function PlanningApplicationClient() {
  const [planningData, setPlanningData] = useState({});
  const [requiredService, setRequiredService] = useState("");
  const [timeline, setTimeline] = useState("");
  const [finance, setFinance] = useState("");

  const params = useSearchParams();

  useEffect(() => {
    setPlanningData((oldValues) => ({
      ...oldValues,
      required_service: requiredService,
      timeline: timeline,
      finance: finance,
    }));
    console.log(planningData);
  }, [requiredService, timeline, finance]);

  useEffect(() => {
    const res = {};
    params.forEach((value, key) => {
      res[key] = value;
    });
    setPlanningData(res);
  }, []);

  const submit = useCallback(async () => {
    if (requiredService.length == 0) {
      alertError("입력이 빠져있어요!", "'어떤 도움이 필요하신가요?' 항목이 선택되지 않았어요!");
      return;
    }
    if (timeline.length == 0) {
      alertError("입력이 빠져있어요!", "'언제 시작하실 계획이신가요?' 항목이 선택되지 않았어요!");
      return;
    }
    if (finance.length == 0) {
      alertError("입력이 빠져있어요!", "'건축비를 위해 도움이 필요하신가요?' 항목이 선택되지 않았어요!");
      return;
    }
    console.log(planningData);
    const [data, error] = await postPlanning(planningData);
    if (error) {
      console.log(error);
      alertError("에러", "입력값에 문제가 있어요. 새로고침하여 다시 시도해보세요!");
    }
    console.log(data);
  }, [planningData]);

  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>어떤 도움이 필요하신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>같이 고민해드릴게요</div>
        <SelectBoxApp
          title={"안심 계약"}
          text={"계약과정을 안심할 수 있습니다."}
          value={"InquiryOnly"}
          data={requiredService}
          setData={setRequiredService}
        />
        <SelectBoxApp
          title={"이해관계자 연결"}
          text={"건축사, 토목사 등을 이어드립니다."}
          value={"ConnectwithCompany"}
          data={requiredService}
          setData={setRequiredService}
        />
        <SelectBoxApp
          title={"통합 패키지"}
          text={"모든 과정을 밀착 관리합니다."}
          value={"FullService"}
          data={requiredService}
          setData={setRequiredService}
        />
      </div>

      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>언제 시작하실 계획이신가요?</div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>대략적인 기간을 알려주세요</div>
        <SelectBoxApp title={"최대한 빠르게"} text={"4~10주 내"} value={"ASAP"} data={timeline} setData={setTimeline} />
        <SelectBoxApp title={"1년 이내"} text={"12주 내"} value={"Within1Year"} data={timeline} setData={setTimeline} />
        <SelectBoxApp
          title={"계획 없음"}
          text={"견적만 알아보기"}
          value={"NoPlan"}
          data={timeline}
          setData={setTimeline}
        />
      </div>

      <div style={{ marginBottom: "150px" }}>
        <div style={{ fontSize: "25px", marginBottom: "20px", fontWeight: "600" }}>
          건축비를 위해 도움이 필요하신가요?
        </div>
        <div style={{ fontSize: "19px", marginBottom: "30px" }}>은행권 대출을 연계해드립니다</div>
        <SelectBoxApp
          title={"필요 없습니다."}
          text={"스스로 확보하겠습니다."}
          value={"Self-funded"}
          data={finance}
          setData={setFinance}
        />
        <SelectBoxApp
          title={"고민 중입니다."}
          text={"연계 서비스를 확인해보겠습니다."}
          value={"InterestedInFundraising"}
          data={finance}
          setData={setFinance}
        />
        <SelectBoxApp
          title={"필요합니다."}
          text={"금융 서비스에 관심이 있습니다."}
          value={"HousingGuaranteeFund"}
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
