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
      <span
        className="btn"
        style={{ wordBreak: "keep-all", color: "red", fontSize: "13px" }}
      >
        로그아웃
      </span>
    </div>
  );
}
