import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQuery(){
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if(value){params.set(name, value);}
      else {params.delete(name);}
      
      return `${pathname}?${params.toString()}`;
    },
    [searchParams]
  )

  return { createQueryString }
}