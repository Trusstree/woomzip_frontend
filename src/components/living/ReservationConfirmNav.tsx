"use client"
import { RouteButton } from "./RouteButton"


export function ReservationConfirmNav(){

    return (
        <div className='row'>
            <div style={{width:"200px"}}>
                <RouteButton url={"/living/reservation/confirm"} text={"신청내역"} />
            </div>
            <div style={{width:"200px"}}>
                <RouteButton url={"/living/reservation/confirm/accept"} text={"수락내역"} />
            </div>
            <div style={{width:"200px"}}>
                <RouteButton url={"/living/reservation/confirm/reject"} text={"거절내역"} />
            </div>
        </div>
    )
}