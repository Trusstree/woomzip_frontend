import { Suspense } from "react";
import HouseClient from "./HouseClient";

export default function Home() {
  return (
    <Suspense>
      <HouseClient />
    </Suspense>
  );
}
