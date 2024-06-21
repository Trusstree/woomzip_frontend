"use server";

import TestClient from "@/app/test/_components/TestClient";
import React from "react";

export default async function Page() {
  return (
    <main>
      <TestClient />
    </main>
  );
}
