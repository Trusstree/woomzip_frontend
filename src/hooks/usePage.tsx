import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function useQuery() {
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = rawPage > 0 ? rawPage : 1;
  return { page };
}
