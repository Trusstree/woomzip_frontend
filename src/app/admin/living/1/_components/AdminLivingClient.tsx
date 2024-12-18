'use client';

import { getReservation } from '@/actions/apis/livingAPI';
import { ReservationConfirm } from '@/app/admin/living/1/_components/ReservationConfirm';
import useQueryString from '@/hooks/useQueryString';
import { toStringByFormatting } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const title = {
  pending: '신청내역',
  confirmed: '수락내역',
  rejected: '거절내역',
};

export function AdminLivingClient() {
  const router = useRouter();
  const [reservation, setReservation] = useState([]);
  const [params, setParams] = useState('pending' as 'pending' | 'confirmed' | 'rejected');
  const { createQuery, getParams } = useQueryString();

  const handleClick = (params: 'pending' | 'confirmed' | 'rejected') => {
    createQuery('method', params);
    setParams(params);
    router.push(`/admin/living/1?${getParams().toString()}`);
  };

  useEffect(() => {
    (async () => {
      const [data, error] = await getReservation(params);
      console.log(data.data);
      if (error) {
        console.error(error);
        return;
      }
      setReservation(data.data);
      console.log(data);
    })();
  }, [params]);

  return (
    <div>
      <h1>{title[params]}</h1>
      <div className="row">
        <div style={{ width: '200px' }}>
          <div
            className="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#101648',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              textAlign: 'center',
            }}
            onClick={() => {
              handleClick('pending');
            }}
          >
            신청내역
          </div>
        </div>
        <div style={{ width: '200px' }}>
          <div
            className="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#101648',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              textAlign: 'center',
            }}
            onClick={() => {
              handleClick('confirmed');
            }}
          >
            수락내역
          </div>
        </div>
        <div style={{ width: '200px' }}>
          <div
            className="button"
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#101648',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              textAlign: 'center',
            }}
            onClick={() => {
              handleClick('rejected');
            }}
          >
            거절내역
          </div>
        </div>
      </div>
      <div>
        {reservation.map((e, i) => (
          <ReservationConfirm
            key={i}
            rid={e['pavilion_reservation_id']}
            requestDate={toStringByFormatting(new Date(e['created_at']))}
            where={'힐링리버'}
            nickname={e['nickname']}
            checkinDate={e['check_in'] && toStringByFormatting(new Date(e['check_in']))}
            checkoutDate={e['check_out'] && toStringByFormatting(new Date(e['check_out']))}
            people={e['people']}
            phoneNumber={e['contact']}
            purpose={e['purpose']}
            status={params}
          />
        ))}
      </div>
    </div>
  );
}
