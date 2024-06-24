import SignoutButton from "@/app/mypage/[uid]/_components/SignoutButton";

export default function MypageUser({ uid, userData }) {
  return (
    <main>
      마이페이지{uid}
      <SignoutButton />
    </main>
  );
}
