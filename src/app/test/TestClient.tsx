"use client";

import { AddressInputForm } from "@/components/test/AddressInputForm";
import React, { useState } from "react";

export default function TestClient() {
  const [addr, setAddr] = useState("");

  return (
    <>
      <AddressInputForm addr={addr} setAddr={setAddr} />
    </>
  );
}
