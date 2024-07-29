"use client";

import { postPlanningConfirm } from "@/actions/apis/planningAPI";

export default function PlanningCard({ data }) {
  return (
    <div className="card col-3">
      <div className="card-header p-0 m-0 d-flex justify-content-between">
        <div className="ms-3 align-self-center">계획하기</div>
        <div className="btn btn-danger">X</div>
      </div>
      <div className="card-body">
        <div>
          name: {data?.["name"]}
          {"(" + data?.["nickname"] + ")"}
        </div>
        <div>phone_number: {data?.["phone_number"]}</div>
        <div>email: {data?.["email"]}</div>
        <div>gender: {data?.["gender"]}</div>
        <div>birthday: {data?.["birthday"]}</div>
        <br />
        <div>fk_house_id: {data?.["fk_house_id"]}</div>
        <div>housing_type: {data?.["housing_type"]}</div>
        <div>addr: {data?.["addr"]}</div>
        <div>land_area: {data?.["land_area"]}</div>
        <div>land_condition: {data?.["land_condition"]}</div>
        <div>road_condition: {data?.["road_condition"]}</div>
        <div>required_service: {data?.["required_service"]}</div>
        <div>planning_timing: {data?.["planning_timing"]}</div>
        <div>funding_source: {data?.["funding_source"]}</div>
      </div>
      <div className="card-footer p-0 m-0 d-flex justify-content-around">
        <div
          className="btn btn-success"
          onClick={async () => {
            const [confirmData, error] = await postPlanningConfirm(data?.["planning_id"]);
            if (error) {
              console.error(error);
              return;
            }
            console.log(confirmData);
          }}
        >
          컨펌
        </div>
      </div>
    </div>
  );
}
