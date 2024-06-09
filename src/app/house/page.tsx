import { Suspense } from "react";
import HouseClient from "./_components/HouseClient";

export default function Home() {
  return (
    <Suspense>
      <HouseClient />
    </Suspense>
  );
}
