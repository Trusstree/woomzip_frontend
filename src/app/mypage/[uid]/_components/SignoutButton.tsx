"use client";

import { signout } from "@/actions/auth/authAction";
import { useUser } from "@/app/ContextSession";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();
  const { setUserContext } = useUser();
  return (
    <div
      style={{}}
      onClick={() => {
        signout();
        setUserContext(undefined);
        router.replace("/");
      }}
    >
      <span className="btn" style={{ wordBreak: "keep-all", color: "red", fontSize: "13px" }}>
        로그아웃
      </span>
    </div>
  );
}
