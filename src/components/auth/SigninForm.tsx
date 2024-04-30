"use client"

import { signinUser } from "@/apis/userAPI";
import { useUser } from "@/app/ContextSession";
import { alertError } from "@/lib/alertUtil";
import { setUserCookie } from "@/lib/cookieUtil";
import { encrypt, getUserdataByToken } from "@/lib/security";
import { isID, isPassword, isRequired } from "@/lib/validator";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SigninForm () {
	const router = useRouter();
	const { setAccessToken, setUserContext } = useUser();
	const [id, setID]=useState(undefined);
	const [pw, setPW]=useState(undefined);

	const submit = async () => {
		// 유효성 검사부터
		if(!isRequired(id)) { alertError('로그인 에러', `아이디를 입력했는지 확인해주세요.`); return; }
		if(!isRequired(pw)) { alertError('로그인 에러', `비밀번호를 입력했는지 확인해주세요.`); return; }
		if(!isID(id)) { alertError('로그인 에러', `아이디가 8~16자인지 확인해주세요.`); return; }
		if(!isPassword(pw)) { alertError('로그인 에러', `비밀번호가 8~16자인지 확인해주세요.`); return; }
		
		const encryptedData = {
			login_id: id,
			password: encrypt(pw)
		};

		const [ data, error ] = await signinUser(encryptedData);
    if (error) {
      console.error(error);
      alertError('로그인 에러', error.response?.data?.message || `로그인에 실패했어요.`);
      return;
    }

    const userData = getUserdataByToken(data.data.access_token);
		
    setUserCookie({
			accessToken: data.data.access_token,
			userData:userData
		});
		
    setAccessToken(data.data.access_token);
		setUserContext(userData);

		router.push('/');
    return;
	}

  return (
    <div className="my-5">
			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_ID`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"ID"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_ID`}
					onChange={(e)=>{setID(e.target.value);}}
					name={"id"}
					value={id}/>
			</div>

			<div className={`w-100 d-flex mt-3 mb-5`}>
				<label
					htmlFor={`signin_PW`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"PW"}
				</label>
				<input
					className="w-100"
					type='password'
					id={`signin_PW`}
					onChange={(e)=>{setPW(e.target.value);}}
					name={"pw"}
					value={pw} />
			</div>

			<div
				className="w-100 btn btn-lg text-white"
				style={{backgroundColor:"#101648"}}
				onClick={submit}>
				로그인
			</div>

			<div
				className="w-100 btn"
				onClick={()=>{router.push('/signup');}}>
				회원이 아니세요? 회원가입
			</div>
    </div>
  )
}
