import HouseClient from "@/app/house/HouseClient";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <HouseClient />
    </Suspense>
  );
}
