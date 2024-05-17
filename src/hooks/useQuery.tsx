import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQuery() {
  const searchParams = useSearchParams();

  const createQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
    },
    [searchParams]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  return { createQuery, createQueryString };
}
