"use client";

import { encryptPW } from "@/actions/auth/cryptPW";
import { AddressInputForm } from "@/components/test/AddressInputForm";
import React, { useState } from "react";
import { useUser } from "../app/ContextSession";
import { Star } from "./Star";

export default function TestClient() {
  const { userContext } = useUser();
  const [addr, setAddr] = useState("");
  const [pw, setPW] = useState("");
  const [encryptedPW, setEncryptedPW] = useState("");
  const [clicked, setClicked]=useState([false,false,false,false,false]);

  const handleClick = () => {
    console.log(userContext);
  };

  const handlePW = async (e) => {
    console.log(e.target.value);
    setPW(e.target.value);
    const _en = await encryptPW(e.target.value);
    setEncryptedPW(_en);
  };

  const handleStarClick = (index: number): void => {
    let clickStates: boolean[] = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <>
      <div className="btn btn-lg btn-outline-primary" onClick={handleClick}>
        ㅎㅇ
      </div>
      <AddressInputForm addr={addr} name={"addr"} setAddr={setAddr} />
      <input onChange={handlePW}></input>
      <div>ori: {pw}</div>
      <div style={{ wordBreak: "break-all" }}>en: {encryptedPW}</div>
      <Star clicked={clicked} onStarClick={handleStarClick} />
    </>
  );
}
