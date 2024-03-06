"use client"

import { signOut, useSession } from "next-auth/react";
import { AdminTextComponent } from "@/components/admin/AdminTextComponent";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { setS3Url } from "@/lib/s3Util";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { getUser, putUser } from "@/apis/userAPI";

export default function Profile() {
  const { data: session } = useSession();

  const [userData, setUserData] = useState({});

  const handleText = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    // if (e) e.preventDefault();
    setUserData((oldValues) => ({...oldValues, [e.target.name]: e.target.value}));
    return;
  }

  const testFunction = async (e:ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files[0];
    const {response, error} = await setS3Url(`users/${session.user.id}/${e.target.name}.${img.type.split("/")[1]}`, img);
    if(!error) {
      setUserData((oldValues) => (
        {
          ...oldValues,
          [e.target.name]: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/users/${session.user.id}/${e.target.name}.${img.type.split("/")[1]}`
        }
      ));
    }
    else console.log(error);
  };

  const submitFunction = async (userData: any) => {
    const {data, error} = await getUser(session.user.id);
    userData["idx"]=data[0].idx;
    if(userData["name"] && typeof userData["name"]!="string") {alertError("name","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["description"] && typeof userData["description"]!="string") {alertError("description","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["profileImage"] && typeof userData["profileImage"]!="string") {alertError("profileImage","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["telNumber"] && typeof userData["telNumber"]!="string") {alertError("telNumber","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["email"] && typeof userData["email"]!="string") {alertError("email","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["location"] && typeof userData["location"]!="string") {alertError("location","type을 다시 한 번 확인해주세요~"); return;}
    if(userData["birthday"] && typeof userData["birthday"]!="string") {alertError("birthday","type을 다시 한 번 확인해주세요~"); return;}
    
    console.log(userData);
    const [a, b] = await putUser(userData);
    if(b)alertError("프로필 수정", "에러가 났어요 ㅠㅠ");
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
          onClick={()=>{signOut();}}
          className={"my-3 px-3 rounded-2 fs-6 text-white "}>
          로그아웃
        </button>
      </div>

      <AdminTextComponent className={"col-12 mb-3"} title={"별명"} text={"name"} data={userData} onChange={handleText}/>
      <AdminTextComponent className={"col-12 mb-3"} title={"한줄 설명"} text={"description"} data={userData} onChange={handleText}/>
      <div className="py-3 mb-3">
        <label htmlFor={"profile"}>
          프로필사진
        </label>
        <img
          id={"profile"}
          src={userData["profileImage"]}
          alt={"profileImage"}
          width={200}
          height={100} />
        <input
          id={"profileImage"}
          name={"profileImage"}
          accept="image/*"
          multiple
          type="file"
          onChange={(e)=>{testFunction(e)}} />
      </div>

      <AdminTextComponent className={"col-12 mb-3"} title={"전화번호"} text={"telNumber"} data={userData} onChange={handleText}/>
      <AdminTextComponent className={"col-12 mb-3"} title={"이메일"} text={"email"} data={userData} onChange={handleText}/>
      <AdminTextComponent className={"col-12 mb-3"} title={"생년월일"} text={"birthday"} data={userData} onChange={handleText}/>
      <AdminTextComponent className={"col-12 mb-3"} title={"위치"} text={"location"} data={userData} onChange={handleText}/>

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
