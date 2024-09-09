'use client';

import { postPlanning } from '@/actions/apis/planningAPI';
import { useUser } from '@/app/_components/ContextSession';
import useQuery from '@/hooks/useQuery';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConfirmComponent() {
  const { getParams } = useQuery();
  const router = useRouter();
  const { userContext } = useUser();
  const [houseData, setHouseData] = useState({});

  useEffect(() => {
    const data = {};
    getParams().forEach((value, key) => {
      data[key] = value;
    });

    data['auth'] = {
      is_login: !!userContext,
      access_token: userContext ? userContext.at : undefined,
    };

    setHouseData(data);
  }, []);

  const submit = async () => {
    const [data, error] = await postPlanning(houseData);
    if (error) {
      console.log(error);
      alertError('에러', '입력값에 문제가 있어요. 새로고침하여 다시 시도해보세요!');
      return;
    }
    console.log(data);
    alertSuccess('성공적으로 등록되었어요!', '제대로 입력되었습니다!');
    router.push('/');
  };

  return (
    <div className="row">
      <div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['house_type']}</div>
        </div>

        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['house_id']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['house_type']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['addr']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['area']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['land_condition']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['road_condition']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['required_service']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['timeline']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['finance']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['name']}</div>
        </div>
        <div className="mb-5 col-12 row">
          <div className="col-4">house type</div>
          <div className="col-8">{houseData['contact']}</div>
        </div>
      </div>

      <div
        className="btn btn-lg btn-success"
        onClick={() => {
          submit();
        }}
      >
        맞아요?
      </div>
      <div
        className="btn btn-lg btn-danger"
        onClick={() => {
          router.back();
        }}
      >
        아니에요?
      </div>
    </div>
  );
}
