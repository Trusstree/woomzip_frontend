'use client';

import { getHouse } from '@/actions/apis/houseAPI';
import { ReservationConfirm } from '@/app/admin/living/1/_components/ReservationConfirm';
import RouteButton from '@/components/RouteButton';
import { toStringByFormatting } from '@/lib/stringUtil';
import { useEffect, useState } from 'react';

export function AdminLivingClient({ house_id }) {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    (async () => {
      const [data, error] = await getHouse(house_id);
      console.log(data);
      if (error) {
        console.error(error);
        return;
      }
      setReservation(data.data[0]);
    })();
  }, [house_id]);

  return (
    <div>
      <div className="row">
        <div style={{ width: '200px' }}>
          <RouteButton url={'/living/reservation/confirm'} >신청내역</RouteButton>
        </div>
        <div style={{ width: '200px' }}>
          <RouteButton url={'/living/reservation/confirm/accept'} >수락내역</RouteButton>
        </div>
        <div style={{ width: '200px' }}>
          <RouteButton url={'/living/reservation/confirm/reject'} >거절내역</RouteButton>
        </div>
      </div>
      <div>
        {reservation.map((e, i) => (
          <ReservationConfirm
            key={i}
            requestDate={e['created_at']}
            where={'힐링리버'}
            nickname={e['nickname']}
            checkinDate={e['check_in'] && toStringByFormatting(e['check_in'])}
            checkoutDate={e['check_out'] && toStringByFormatting(e['check_out'])}
            people={e['people']}
            phoneNumber={e['contact']}
            purpose={e['purpose']}
            rid={1}
            status={'pending'}
          />
        ))}
      </div>
    </div>
  );
}
