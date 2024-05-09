"use client";

import CalenderForm from "@/components/test/CalenderForm"; // CalenderForm 컴포넌트 import 수정
import { alertSuccess } from "@/lib/alertUtil";
import moment from "moment";
import { useState } from "react";

export function LivingReservationForm() {
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [propose, setPropose] = useState("");

  const submit = async () => {
    console.log({
      date: date,
      people: people,
      name: name,
      phoneNumber: phoneNumber,
      propose: propose.replaceAll("\n", "<br/>"),
    });
    alertSuccess("버튼 클릭", "그냥... 아직 기능은 구현 안 됐지만 일단 뭐라도 있는 게 나아보여서요.");
  };

  return (
    <div className="container row" style={{ width: "100%", marginBottom: "350px" }}>
      <div className="container" style={{ width: "400px", margin: "0 0 20px 0" }}>
        <CalenderForm date={date} setDate={setDate} /> {/* CalenderForm 컴포넌트를 JSX에서 올바르게*/}
      </div>
      <div
        className="container"
        style={{ width: "100%", maxWidth: "870px", margin: "0", float: "left", color: "gray" }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="container row" style={{ width: "100%", alignItems: "center" }}>
            <div className="container" style={{ width: "100px", margin: "0" }}>
              날짜
            </div>
            <div
              className="container"
              style={{ border: "none", width: "75%", height: "30px", padding: "0", margin: "0" }}
            >
              {date.toISOString()}
            </div>
          </div>
          <hr />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className="container row" style={{ width: "100%", alignItems: "center" }}>
            <div className="container" style={{ width: "100px", margin: "0" }}>
              인원
            </div>
            <input
              className="container"
              style={{ border: "none", width: "75%", height: "30px", padding: "0", margin: "0" }}
              placeholder={"ex) 3"}
              value={people}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) setPeople(0);
                else setPeople(Number(e.target.value));
              }}
            ></input>
          </div>
          <hr />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className="container row" style={{ width: "100%", alignItems: "center" }}>
            <div className="container" style={{ width: "100px", margin: "0" }}>
              이름
            </div>
            <input
              className="container"
              style={{ border: "none", width: "75%", height: "30px", padding: "0", margin: "0" }}
              placeholder={"ex) 홍길동"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <hr />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className="container row" style={{ width: "100%", alignItems: "center" }}>
            <div className="container" style={{ width: "100px", margin: "0" }}>
              전화번호
            </div>
            <input
              className="container"
              style={{ border: "none", width: "75%", height: "30px", padding: "0", margin: "0" }}
              placeholder={"ex) 010-1234-5678"}
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            ></input>
          </div>
          <hr />
        </div>
        <div className="container" style={{ width: "100%" }}>
          <div className="container row" style={{ width: "100%", alignItems: "center" }}>
            <div className="container" style={{ width: "100px", margin: "0" }}>
              방문목적
            </div>
            <textarea
              className="container"
              style={{
                border: "none",
                width: "75%",
                minHeight: "100px",
                padding: "0",
                margin: "0",
                resize: "none",
                overflow: "hidden",
              }}
              placeholder={"최대한 구체적으로 적어주세요!"}
              value={propose}
              onChange={(e) => {
                // 스크롤 늘어나는 거 싫어 ㅠㅠ
                if (e.target.scrollHeight === e.target.clientHeight) {
                  setPropose(e.target.value);
                }
              }}
              rows={4}
            ></textarea>
          </div>
          <hr />
        </div>
        <div className="container row" style={{ width: "500px", margin: "20px 0" }}>
          <div className="container" style={{ width: "350px", margin: "0" }}>
            힐링리버의 체험 조건을 확인하였고, 동의합니다.
          </div>
          <input
            className="container"
            style={{ border: "none", width: "50px", padding: "0", margin: "0" }}
            type="checkbox"
          ></input>
        </div>
        <button
          style={{
            width: "400px",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#101648",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            textAlign: "center",
          }}
          onClick={submit}
        >
          예약 요청하기
        </button>
      </div>
    </div>
  );
}
