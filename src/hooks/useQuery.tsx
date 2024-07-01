import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function useQuery() {
  const searchParams = useSearchParams();
  const [params, setParams] = useState(new URLSearchParams(searchParams));

  const createQuery = useCallback(
    (name: string, value?: string) => {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
    },
    [searchParams]
  );

  const createQueryString = useCallback(
    (name: string, value?: string) => {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  const getParams = () => {
    return params;
  };

  const getParamsString = () => {
    return params.toString();
  };

  return { createQuery, createQueryString, getParams, getParamsString };
}
