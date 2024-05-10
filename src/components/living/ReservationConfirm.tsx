"use client"

export function ReservationConfirm({requestDate, where, date, num, name, phNum, why}){


    return (
        <div 
            className="card"
            style={{marginBottom:"20px", padding:"10px", width:"100%", minWidth:"400px", height:"100%", border:"1px solid lightGray", borderRadius:"15px"}}>
            <div>신청일자 :  {requestDate}</div>
            <div style={{marginBottom:"20px"}}>신청장소 :  {where}</div>
            <div>날짜 :  {date}</div>
            <div>인원 :  {num}</div>
            <div>이름 :  {name}</div>
            <div>전화번호 :  {phNum}</div>
            <div>방문목적 :  {why}</div>
            <div className="row">
                <button type="button" className="btn btn-success" style={{width:"150px", marginLeft:"10px"}}>수락하기</button>
                <button type="button" className="btn btn-danger" style={{width:"150px", marginLeft:"10px"}}>거절하기 </button>
            </div>
        </div>
    );
}