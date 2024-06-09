"use client";

import { TextBoxComponent } from "@/components/forms/TextBoxComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { setS3Url } from "@/lib/s3Util";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { putUser } from "@/apis/userAPI";
import ImageBox from "@/app/mypage/[uid]/_components/ImageBox";
import { useRouter } from "next/navigation";
import { signout } from "@/actions/auth/signout";

type ProfileProps = {
  userData: any;
};

export default function Profile(props: ProfileProps) {
  const { userData } = props;
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    name: userData?.name || "",
    nickname: userData?.nickname || "",
    one_line_introduce: userData?.one_line_introduce || "",
    user_img_url: userData?.user_img_url || "/blur_image.png",
    phone_number: userData?.phone_number || "",
    email: userData?.email || "",
    gender: userData?.gender || "",
    birthday: userData?.birthday || "",
    addr: userData?.addr || "",
  });

  // useEffect(() => {
  //   (async () => {})();
  // }, []);

  const handleText = (e: ChangeEvent<HTMLInputElement>): ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();
    setProfileData((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
    return;
  };

  const setProfile = async (e: ChangeEvent<HTMLInputElement> | any) => {
    const img = e.target.files[0];
    if (img?.type?.split("/")[0] != "image") return;

    const url = `users/${userData?.user_profile_id}/profileImage.${img.type.split("/")[1]}`;
    const [meta, s3Error] = await setS3Url(url, img);
    console.log(meta);

    if (s3Error) {
      console.error(s3Error);
      return;
    }

    setProfileData((oldValues) => ({
      ...oldValues,
      [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`,
    }));
  };

  const submit = async () => {
    if (!profileData["nickname"]) {
      profileData["nickname"] = " ";
    }
    if (!profileData["one_line_introduce"]) {
      profileData["one_line_introduce"] = " ";
    }
    if (!profileData["user_img_url"]) {
      profileData["user_img_url"] = "/blur_image.png";
    }
    if (!profileData["phone_number"]) {
      profileData["phone_number"] = " ";
    }
    if (!profileData["email"]) {
      profileData["email"] = " ";
    }
    if (!profileData["addr"]) {
      profileData["addr"] = " ";
    }
    if (!profileData["gender"]) {
      profileData["gender"] = " ";
    }
    if (!profileData["birthday"]) {
      profileData["birthday"] = " ";
    }

    if (typeof profileData["nickname"] != "string") {
      alertError("nickname", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["one_line_introduce"] != "string") {
      alertError("one_line_introduce", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["user_img_url"] != "string") {
      alertError("user_img_url", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["phone_number"] != "string") {
      alertError("phone_number", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["email"] != "string") {
      alertError("email", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["addr"] != "string") {
      alertError("addr", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["gender"] != "string") {
      alertError("gender", "type을 다시 한 번 확인해주세요~");
      return;
    }
    if (typeof profileData["birthday"] != "string") {
      alertError("birthday", "type을 다시 한 번 확인해주세요~");
      return;
    }

    console.log(profileData);
    const [data, error] = await putUser(profileData);

    if (error) {
      alertError("프로필 수정", "에러가 났어요 ㅠㅠ");
      return;
    }

    alertSuccess("프로필 수정", "제대로 수정됐어요~!");
    router.push(`/mypage/${userData.user_profile_id}`);
  };

  return (
    <>
      <div className="mt-5 d-flex justify-content-between">
        <h4 className="align-self-center fw-bold">프로필 변경</h4>
        <button
          type="button"
          style={{ backgroundColor: "#101648" }}
          onClick={() => {
            signout();
            router.push("/");
          }}
          className={"my-3 px-3 rounded-2 fs-6 text-white "}
        >
          로그아웃
        </button>
      </div>
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"이름"}
        name={"name"}
        data={profileData}
        onChange={handleText}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"별명"}
        name={"nickname"}
        data={profileData}
        onChange={handleText}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"한줄 설명"}
        name={"one_line_introduce"}
        data={profileData}
        onChange={handleText}
      />
      <ImageBox
        title={"프로필사진"}
        data={profileData}
        id={"user_img_url"}
        name={"user_img_url"}
        onChange={setProfile}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"전화번호"}
        name={"phone_number"}
        data={profileData}
        onChange={handleText}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"이메일"}
        name={"email"}
        data={profileData}
        onChange={handleText}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"생년월일"}
        name={"birthday"}
        data={profileData}
        onChange={handleText}
      />
      <TextBoxComponent
        className={"col-12 mb-3"}
        title={"공장위치"}
        name={"addr"}
        data={profileData}
        onChange={handleText}
      />

      <div className="d-flex justify-content-end">
        <button
          type="submit"
          style={{ backgroundColor: "#101648" }}
          className={`my-5 px-4 py-2 btn text-white rounded-lg fw-bold fs-5`}
          onClick={submit}
        >
          {"회원정보 변경"}
        </button>
      </div>
    </>
  );
}
