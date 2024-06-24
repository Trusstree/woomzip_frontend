"use client";

import { signout } from "@/actions/auth/authAction";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();
  return (
    <div
      style={{}}
      onClick={() => {
        signout();
        router.replace("/");
      }}
    >
      <span className="btn text-white" style={{ backgroundColor: "#101648", wordBreak: "keep-all" }}>
        로그아웃
      </span>
    </div>
  );
}
