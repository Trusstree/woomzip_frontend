import { getUser } from "@/actions/apis/userAPI";
import { ReviewInfo } from "@/components/house/ReviewInfo";
import AppPostList from "@/components/posts/AppPostList";
import PostMenu from "@/components/posts/PostMenu";
import { AppLivingCardList } from "@/app/mypage/[uid]/_components/AppLivingCardList";
import House from "@/app/mypage/[uid]/_components/House";
import { Suspense } from "react";
import MyPageProfile from "@/app/mypage/[uid]/_components/MyPageProfile";
import MypageCompany from "@/app/mypage/[uid]/_components/MypageCompany";
import MypageUser from "@/app/mypage/[uid]/_components/MypageUser";

async function create(uid: string | number) {
  "use server";

  const [data, error] = await getUser(uid);
  if (error) {
    console.log(error);
    console.log("user error");
    return;
  }
  console.log(data?.data[0]?.user_profile);
  return data?.data[0]?.user_profile;
}

export default async function Page({ params }) {
  const { uid } = params;
  console.log("asdfasdf1");
  const userData: any = await create(uid);
  console.log("asdfasdf2");
  return userData.role == "1" ? (
    <MypageCompany uid={uid} userData={userData} />
  ) : (
    <MypageUser uid={uid} userData={userData} />
  );
}
