"use client"

import { signOut, useSession } from "next-auth/react";
import { TextBoxComponent } from "@/components/forms/TextBoxComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { setS3Url } from "@/lib/s3Util";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { getUser, putUser } from "@/apis/userAPI";
import Image from "next/image";
import moment from "moment";
import ImageBox from "@/components/mypage/ImageBox";
import { getUserCookie, removeUserCookie } from "@/lib/cookieUtil";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/ContextSession";

type ProfileProps = {
}

export default function Profile(props: ProfileProps) {
  // const { data: session } = useSession();
  const { userContext, setUserContext, setAccessToken } = useUser();
  const router = useRouter();
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    (async () => {
      const [ data, error ] = await getUser(getUserCookie().userData.uid);
      console.log(data.data[0].user_profile);

      setUserData(data.data[0].user_profile);
    })();
  },[]);

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();
    setUserData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const setProfile = async (e:ChangeEvent<HTMLInputElement>|any) => {
    const img = e.target.files[0];
    if(img?.type?.split("/")[0]!="image") return;
    const date=moment().format('YYYYMMDDHHmmss');
    const [meta, s3Error] = await setS3Url(`users/${userContext.uid}/profileImage${date}.${img.type.split("/")[1]}`, img);
    if(!s3Error) {
      setUserData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/users/${userContext.uid}/profileImage${date}.${img.type.split("/")[1]}`
        }
      ));
    }
    else console.error(s3Error);
  };

  const submitFunction = async (userData: any) => {
    if(userData["nickname"] && typeof userData["nickname"]!="string") {alertError("nickname","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["one_line_introduce"] && typeof userData["one_line_introduce"]!="string") {alertError("one_line_introduce","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["user_img_url"] && typeof userData["user_img_url"]!="string") {alertError("user_img_url","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["phone_number"] && typeof userData["phone_number"]!="string") {alertError("phone_number","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["email"] && typeof userData["email"]!="string") {alertError("email","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["addr"] && typeof userData["addr"]!="string") {alertError("addr","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["birthday"] && typeof userData["birthday"]!="string") {alertError("birthday","type을 다시 한 번 확인해주세요~"); return;}
    
    const [data, error] = await putUser(userData, userContext.accessToken);
    if(error) alertError("프로필 수정", "에러가 났어요 ㅠㅠ");
    else alertSuccess("프로필 수정", "제대로 수정됐어요~!");
  }
  
  return (
    <>
      <div className="mt-5 d-flex justify-content-between">
        <h4 className="align-self-center fw-bold">
          프로필 변경
        </h4>
        <button
          type="button"
          style={{backgroundColor:"#101648"}}
          onClick={()=>{removeUserCookie(); setUserContext(undefined); setAccessToken(""); router.push("/");}}
          className={"my-3 px-3 rounded-2 fs-6 text-white "}>
          로그아웃
        </button>
      </div>

      <TextBoxComponent className={"col-12 mb-3"} title={"별명"} name={"nickname"} data={userData} onChange={handleText}/>
      <TextBoxComponent className={"col-12 mb-3"} title={"한줄 설명"} name={"one_line_introduce"} data={userData} onChange={handleText}/>
      <ImageBox title={"프로필사진"} data={userData} id={"user_img_url"} name={"user_img_url"} onChange={setProfile} />
      <TextBoxComponent className={"col-12 mb-3"} title={"전화번호"} name={"phone_number"} data={userData} onChange={handleText}/>
      <TextBoxComponent className={"col-12 mb-3"} title={"이메일"} name={"email"} data={userData} onChange={handleText}/>
      <TextBoxComponent className={"col-12 mb-3"} title={"생년월일"} name={"birthday"} data={userData} onChange={handleText}/>
      <TextBoxComponent className={"col-12 mb-3"} title={"공장위치"} name={"addr"} data={userData} onChange={handleText}/>
      
      <div className="d-flex justify-content-end">
        <button
          type="button"
          name="image"
          style={{ backgroundColor:"#101648" }}
          className={`my-5 px-4 py-2 btn text-white rounded-lg fw-bold fs-5`}
          onClick={async ()=>{await submitFunction(userData); }}>
          {"회원정보 변경"}
        </button>
      </div>
    </>
  );
}
