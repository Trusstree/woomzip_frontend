"use client";

import { getUser } from "@/apis/userAPI";
import { AddressInputForm } from "@/components/test/AddressInputForm";
import { getAccessTokenClient } from "@/configs/cookie.client";
import React, { useState } from "react";

export default function TestClient() {
  const [addr, setAddr] = useState("");
  const handleClick = async () => {
    const [data, error] = await getUser(1);
    console.log(error);
    console.log(data);
  };

  return (
    <>
      <div className="btn btn-lg btn-outline-primary" onClick={handleClick}>
        ㅎㅇ
      </div>
      <AddressInputForm addr={addr} setAddr={setAddr} />
    </>
  );
}
