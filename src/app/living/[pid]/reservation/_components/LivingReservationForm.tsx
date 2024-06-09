"use client";

import CalenderForm from "@/app/living/[pid]/reservation/_components/CalenderForm"; // CalenderForm 컴포넌트 import 수정
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { toStringByFormatting } from "@/lib/stringUtil";
import { useEffect, useState } from "react";
import { getReservationUnavailable, postReservation } from "@/apis/living";
import { useRouter } from "next/navigation";

export function LivingReservationForm() {
  const router = useRouter();
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [isCheckin, setIsCheckin] = useState(true);
  const [people, setPeople] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [propose, setPropose] = useState("");
  const [check, setCheck] = useState(false);
  const [unavailableDay, setUnavailableDay] = useState([]);

  const submit = async () => {
    if (!check) {
      alertError("동의가 필요해요!", "동의를 하지 않으시면 예약을 할 수가 없어요!");
      return;
    }
    const body = {
      check_in: toStringByFormatting(checkinDate),
      check_out: toStringByFormatting(checkoutDate),
      people: people,
      // name: name,
      contact: phoneNumber,
      purpose: propose.replaceAll("\n", "<br/>"),
    };

    const [data, error] = await postReservation(body);
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
    alertSuccess(
      "예약이 완료되었어요!",
      `${toStringByFormatting(checkinDate)} ~ ${toStringByFormatting(checkoutDate)}`
    );
    router.push("/living");
  };

  useEffect(() => {
    (async () => {
      const [data, error] = await getReservationUnavailable(1);
      if (error) {
        console.error(error);
        return;
      }
      console.log(data?.data["unavailableDay"].map((e) => new Date(e)));
      setUnavailableDay(data?.data["unavailableDay"].map((e) => new Date(e)));
    })();
  }, []);

  return (
    <div className="container row" style={{ width: "100%", marginBottom: "350px" }}>
      <div className="container" style={{ width: "400px", margin: "0 0 20px 0" }}>
        <CalenderForm
          checkinDate={checkinDate}
          setCheckinDate={setCheckinDate}
          checkoutDate={checkoutDate}
          setCheckoutDate={setCheckoutDate}
          unavailableDay={unavailableDay}
          isCheckin={isCheckin}
        />{" "}
        {/* CalenderForm 컴포넌트를 JSX에서 올바르게*/}
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
              className={isCheckin ? "text-black" : ""}
              style={{ border: "none", width: "15%", height: "30px", padding: "0", margin: "0" }}
              onClick={() => {
                setIsCheckin(true);
              }}
            >
              {toStringByFormatting(checkinDate)}
            </div>
            <span style={{ border: "none", width: "5%", height: "30px", padding: "0", margin: "0" }}>-</span>
            <div
              className={!isCheckin ? "text-black" : ""}
              style={{ border: "none", width: "15%", height: "30px", padding: "0", margin: "0" }}
              onClick={() => {
                setIsCheckin(false);
              }}
            >
              {toStringByFormatting(checkoutDate)}
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
          <div className="container" style={{ width: "200px", margin: "0", wordBreak: "keep-all" }}>
            힐링리버의 체험 조건을 확인하였고, 동의합니다.
          </div>
          <input
            className="container"
            style={{ border: "none", width: "50px", padding: "0", margin: "0" }}
            type="checkbox"
            onClick={(e) => {
              setCheck((e.target as any).checked);
            }}
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
