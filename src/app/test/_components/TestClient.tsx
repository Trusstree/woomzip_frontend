"use client";

import { useUser } from "@/app/ContextSession";
import { AddressInputForm } from "@/app/test/_components/AddressInputForm";
import { encryptPW } from "@/lib/authUtil";
import React, { useState } from "react";

export default function TestClient() {
  const { userContext } = useUser();
  const [addr, setAddr] = useState("");
  const [pw, setPW] = useState("");
  const [encryptedPW, setEncryptedPW] = useState("");

  const handleClick = () => {
    console.log(userContext);
  };

  const handlePW = async (e) => {
    console.log(e.target.value);
    setPW(e.target.value);
    const _en = encryptPW(e.target.value);
    setEncryptedPW(_en);
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
    </>
  );
}
