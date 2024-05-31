"use client";

import { getUser } from "@/apis/userAPI";
import { AddressInputForm } from "@/components/test/AddressInputForm";
import React, { useState } from "react";
import { useUser } from "../app/ContextSession";

export default function TestClient() {
  const [addr, setAddr] = useState("");
  const { userContext } = useUser();
  const handleClick = async () => {
    console.log(userContext);
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
