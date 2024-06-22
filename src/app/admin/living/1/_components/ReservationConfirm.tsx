"use client";

import { getReservationConfirm } from "@/actions/apis/living";
import { alertError, alertSuccess } from "@/lib/alertUtil";

export function ReservationConfirm({
  rid,
  nickname = "",
  requestDate = "",
  where = "",
  checkinDate = "",
  checkoutDate = "",
  people = "",
  phoneNumber = "",
  purpose = "",
  status,
}) {
  const confirm = async (rid: number, params: 1 | 0) => {
    const [data, error] = await getReservationConfirm(rid, params);
    if (error) {
      alertError("에러", "에러");
      return;
    }
    alertSuccess("성공", "성공");
  };
  return (
    <div
      className="card"
      style={{
        marginBottom: "20px",
        padding: "10px",
        width: "100%",
        minWidth: "400px",
        height: "100%",
        border: "1px solid lightGray",
        borderRadius: "15px",
      }}
    >
      <div>신청일자 : {requestDate}</div>
      <div style={{ marginBottom: "20px" }}>신청장소 : {where}</div>
      <div>
        날짜 : {checkinDate} ~ {checkoutDate}
      </div>
      <div>인원 : {people}</div>
      <div>이름 : {nickname}</div>
      <div>전화번호 : {phoneNumber}</div>
      <div>방문목적 : {purpose}</div>

      {status == "pending" && (
        <div className="row">
          <button
            type="button"
            className="btn btn-success"
            style={{ width: "150px", marginLeft: "10px" }}
            onClick={async () => {
              confirm(rid, 1);
            }}
          >
            수락하기
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "150px", marginLeft: "10px" }}
            onClick={async () => {
              confirm(rid, 0);
            }}
          >
            거절하기
          </button>
        </div>
      )}
    </div>
  );
}
