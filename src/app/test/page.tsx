import "server-only";

import React from "react";
import { cookies } from "next/headers";

export default async function Test() {
  const cookieStore = cookies();
  const data = cookieStore.get("accessToken");
  console.log(data);

  return (
    <main>
      {data ? "원피스는 실존한다!" : "아니 이게 왜 없어!"}
      {/* <TestClient /> */}
    </main>
  );
}
