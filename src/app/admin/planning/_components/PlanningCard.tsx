'use client';

import { patchPlanningConfirm } from '@/actions/apis/planningAPI';
import Image from 'next/image';

export default function PlanningCard({ data }) {
  const { planning, user_profile } = data;
  return (
    <div className="card col-12">
      <div className="row no-gutters">
        <div className="col-4">
          <div className="col-3 p-0 m-0 d-flex justify-content-between">
            <div>fk_house_id: {planning?.['fk_house_id']}</div>
            <Image src={'/blur_image.webp'} alt={`house_image_${planning?.['fk_house_id']}`} width={400} height={400} />
          </div>
        </div>
        <div className="col-8">
          <div className="card-body">
            <div>name: {planning?.['name']}</div>
            <div>phone_number: {planning?.['phone_number']}</div>
            <br />

            <div>housing_type: {planning?.['housing_type']}</div>
            <div>addr: {planning?.['addr']}</div>
            <div>land_area: {planning?.['land_area']}</div>
            <div>land_condition: {planning?.['land_condition']}</div>
            <div>road_condition: {planning?.['road_condition']}</div>
            <div>required_service: {planning?.['required_service']}</div>
            <div>planning_timing: {planning?.['planning_timing']}</div>
            <div>funding_source: {planning?.['funding_source']}</div>
          </div>
          <div className="card-footer p-0 m-0 d-flex justify-content-around">
            <div
              className="btn btn-success w-100"
              onClick={async () => {
                const [confirmData, error] = await patchPlanningConfirm(planning?.['planning_id']);
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
      </div>
    </div>
  );
}
