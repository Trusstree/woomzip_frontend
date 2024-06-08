import { useSearchParams } from "next/navigation";

export default function usePage() {
  const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = rawPage > 0 ? rawPage : 1;
  return { page };
}
