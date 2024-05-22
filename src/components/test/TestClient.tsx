"use client";

import { getUser } from "@/apis/userAPI.server";
import { AddressInputForm } from "@/components/test/AddressInputForm";
import React, { useState } from "react";

export default function TestClient() {
  const [addr, setAddr] = useState("");
  const handleClick = async () => {
    const [data, error] = await getUser(1);
  };

  return (
    <>
      <div className="btn btn-lg btn-outline-primary" onClick={handleClick}>
        ㅎㅇ
      </div>
      <AddressInputForm addr={addr} name={"addr"} setAddr={setAddr} />
    </>
  );
}
