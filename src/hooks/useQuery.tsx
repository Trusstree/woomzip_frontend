"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useQuery() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [params, setParams] = useState(new URLSearchParams(searchParams));

  useEffect(() => {
    setParams(new URLSearchParams(searchParams));
  }, [searchParams]);

  const createQuery = (name: string, value?: string) => {
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
  };

  const createQueryString = (name: string, value?: string) => {
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    return params.toString();
  };

  const getParams = () => {
    return params;
  };

  const getRouteParams = () => {
    return `${pathname}?${params.toString()}`;
  };

  return { createQuery, createQueryString, getParams, getRouteParams };
}
