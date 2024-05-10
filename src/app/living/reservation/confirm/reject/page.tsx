import React from 'react';
import { ReservationConfirm } from '@/components/living/ReservationConfirm';
import { ReservationConfirmNav } from '@/components/living/ReservationConfirmNav';

const ReservationConfirmExample = [
    <ReservationConfirm
        requestDate={"24.05.10 18:55"}
        where={"힐링리버"}
        date={"24.05.12~24.05.14"}
        num={"3"} name={"홍길동"}
        phNum={"000-000-0000"}
        why={"즐기러 감"} />,
    <ReservationConfirm
        requestDate={"24.05.10 18:55"}
        where={"힐링리버"}
        date={"24.05.12~24.05.14"}
        num={"3"} name={"홍길동"}
        phNum={"000-000-0000"}
        why={"즐기러 감"} />
]

export default function confirm () {
    return (
        <main>
        <div style={{margin:"40px 0"}}>예약 수락내역(관리자용)</div>
        <ReservationConfirmNav />
        
        {ReservationConfirmExample}

        </main>
    )
}