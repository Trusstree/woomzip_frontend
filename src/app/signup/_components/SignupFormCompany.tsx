"use client";

import { signupUser, validateID, validateName } from "@/actions/apis/userAPI";
import SignupGenderRadio from "@/app/signup/_components/SignupRadio";
import SignupTextBox from "@/app/signup/_components/SignupTextBox";
import { alertError, alertSuccess } from "@/lib/alertUtil";
import { encryptPW } from "@/lib/authUtil";
import { setS3Url } from "@/lib/s3Util";
import { isEmail, isID, isPassword, isPhoneNumber, isRequired } from "@/lib/validator";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function handleImages(thumbnail, name) {
  const thumbnailArr = [];

  for (const ee of thumbnail) {
    const title = "thumbnail" + moment().format("YYYYMMDDHHmmss");
    const url = `users/${name}/${title}.${ee.type.split("/")[1]}`;
    const [response, error] = await setS3Url(url, ee);
    if (error) {
      console.error(error);
      return;
    }
    thumbnailArr.push(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`);
  }
  return thumbnailArr;
}

export function SignupFormCompany() {
  const router = useRouter();
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [repw, setRePW] = useState("");
  const [name, setName] = useState("");
  const [userImg, setUserImg] = useState(undefined as any);
  const [introduce, setIntroduce] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("1970-01-01");
  const [thumbnail, setThumbnail] = useState([] as Array<File>);
  const [addr, setAddr] = useState("");
  const [prUrl, setPrUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const handlePhoneNumber = (e) => {
    const regex = new RegExp(/^[0-9\b -]{0,13}$/);
    if (regex.test(e)) setPhoneNumber(e);
  };

  useEffect(() => {
    if (phoneNumber.length === 10) setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    if (phoneNumber.length === 11) setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    if (phoneNumber.length === 13)
      setPhoneNumber(phoneNumber.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    if (phoneNumber.length === 14)
      setPhoneNumber(phoneNumber.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
  }, [phoneNumber]);

  const submit = async () => {
    if (!isID(id)) {
      return alertError("ID", `ID를 8~16자 사이로 숫자와 함께 입력해주세요!`);
    }
    const [vid, vidError] = await validateID(id);
    if (vidError) {
      return alertError("ID", `ID가 중복되었어요!`);
    }
    if (pw != repw) {
      return alertError("PW 확인", `PW를 제대로 입력했는지 확인해주세요!`);
    }
    if (!isPassword(pw)) {
      return alertError("PW", `비밀번호를 8~16자 사이로 입력해주세요!`);
    }
    if (!isEmail(email)) {
      return alertError("이메일", `이메일 형식에 맞게 입력해주세요!`);
    }
    if (!isRequired(name)) {
      return alertError("이름", `이름을 입력해주세요!`);
    }
    const [vname, vnameError] = await validateName(id);
    if (vnameError) {
      return alertError("이름", `이름이 중복되었어요!`);
    }
    if (!isRequired(nickname)) {
      return alertError("별명", `별명을 입력해주세요!`);
    }
    if (!isPhoneNumber(phoneNumber)) {
      return alertError("연락처", `연락처를 형식에 맞게 입력해주세요!`);
    }
    if (!isRequired(gender)) {
      return alertError("성별", `성별을 입력해주세요!`);
    }
    if (!isRequired(addr)) {
      return alertError("주소", `주소를 입력해주세요!`);
    }

    if (!isRequired(prUrl)) {
      return alertError("홈페이지 주소", `홈페이지 주소를 입력해주세요!`);
    }
    if (!isRequired(youtubeUrl)) {
      return alertError("홍보채널", `홍보채널을 입력해주세요!`);
    }

    const thumbnailArr = await handleImages(thumbnail, name);
    if (thumbnailArr.length == 0) {
      return alertError("홍보사진", `홍보용 사진을 입력해주세요!`);
    }

    const encryptedData = {
      login_id: id,
      password: encryptPW(pw),
      name: name,
      nickname: nickname,
      user_img_url: userImg,
      one_line_introduce: introduce,
      phone_number: phoneNumber,
      email: email,
      gender: gender,
      birthday: birthday,
      addr: addr,
      company_url: prUrl,
      pr_rl: youtubeUrl,
      company_images: thumbnailArr,
    };

    const [data, error] = await signupUser(encryptedData);
    if (error) {
      console.log(error);
      alertError("로그인 에러", error.message || `회원가입에 실패했어요.`);
      return;
    }

    alertSuccess("회원가입 신청완료", "기업 회원 가입을 요청했습니다. 확인 후에 알려드릴게요!");
    router.push("/");
    return;
  };

  const handleThumbnail = (e) => {
    const files = Array.from(e.target.files) as Array<File>;
    const imgs = files.filter((ee) => ee?.type?.split("/")[0] == "image");

    setThumbnail((oldValues) => [...oldValues, ...imgs]);
  };

  const handleUserImg = (e) => {
    const img = e.target.files[0];
    if (img.type?.split("/")[0] == "image") return;
    setUserImg(img);
  };

  return (
    <div className="my-5">
      <SignupTextBox title={"이름"} name={"name"} data={name} setData={setName} />
      <SignupTextBox title={"별명"} name={"nickname"} data={nickname} setData={setNickname} />
      <SignupTextBox title={"ID"} name={"id"} data={id} setData={setID} />
      <SignupTextBox title={"PW"} name={"pw"} data={pw} setData={setPW} type={"password"} />
      <SignupTextBox title={"PW 확인"} name={"repw"} data={repw} setData={setRePW} type={"password"} />
      <SignupTextBox title={"이메일"} name={"email"} data={email} setData={setEmail} />
      <SignupTextBox title={"한줄설명"} name={"introduce"} data={introduce} setData={setIntroduce} />
      <SignupGenderRadio data={gender} setData={setGender} />
      <SignupTextBox title={"연락처"} name={"phoneNumber"} data={phoneNumber} setData={handlePhoneNumber} />
      <SignupTextBox title={"생년월일"} name={"birthday"} data={birthday} setData={setBirthday} type={"date"} />

      <div className={`d-flex mb-3`}>
        <label htmlFor={`signin_userImg`} className="fs-5 col-2" style={{ color: "#101648" }}>
          {"섬네일"}
        </label>
        <input className="w-100" type="file" id={`signin_userImg`} onChange={handleUserImg} name={"userImg"} />
      </div>

      <div className={`d-flex mb-3`}>
        <label htmlFor={`signin_thumbnail`} className="fs-5 col-2" style={{ color: "#101648" }}>
          {"사진"}
        </label>
        <input
          className="w-100"
          type="file"
          id={`signin_thumbnail`}
          onChange={handleThumbnail}
          name={"thumbnail"}
          multiple
        />
      </div>

      <SignupTextBox title={"위치"} name={"addr"} data={addr} setData={setAddr} />
      <SignupTextBox title={"홈페이지"} name={"prUrl"} data={prUrl} setData={setPrUrl} />
      <SignupTextBox title={"홍보채널"} name={"youtubeUrl"} data={youtubeUrl} setData={setYoutubeUrl} />

      <div className="w-100 btn btn-lg text-white" style={{ backgroundColor: "#101648" }} onClick={submit}>
        회원가입
      </div>
    </div>
  );
}
