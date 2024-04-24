"use client"

import { signinUser, signupUser, validateID } from "@/apis/userAPI";
import { alertError, alertSuccess } from "@/lib/alertUtil";

import { encrypt, getUserdataByToken } from "@/lib/security";
import { isEmail, isID, isPassword, isRequired } from "@/lib/validator";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export function SignupForm() {
	const router = useRouter();
	const [id, setID]=useState(undefined);
	const [pw, setPW]=useState(undefined);
	const [repw, setRePW]=useState(undefined);
	const [name, setName]=useState(undefined);
	const [email, setEmail]=useState(undefined);
	const [phoneNumber, setPhoneNumber]=useState(undefined);
	const [gender, setGender]=useState(undefined);
	const [birthday, setBirthday]=useState(undefined);
	const [addr, setAddr]=useState(undefined);

	const submit = async ()=>{
		
		if(!isID(id)) { return alertError('ID', `ID를 8~16자 사이로 숫자와 함께 입력해주세요!`);}
		const [vid, vidError] = await validateID(id);
		if(vidError) { return alertError('ID', `ID가 중복되었어요!`);}
		if(pw!=repw) { return alertError('PW 확인', `PW를 제대로 입력했는지 확인해주세요!`);}
		if(!isPassword(pw)) { return alertError('PW', `비밀번호를 8~16자 사이로 입력해주세요!`);}
		if(!isEmail(email)) { return alertError('이메일', `이메일 형식에 맞게 입력해주세요!`);}
		if(!isRequired(name)) { return alertError('이름', `이름을 입력해주세요!`);}
		const [vname, vnameError] = await validateID(id);
		if(vnameError) { return alertError('이름', `이름이 중복되었어요!`);}
		if(!isRequired(phoneNumber)) { return alertError('연락처', `연락처를 입력해주세요!`);}
		if(!isRequired(gender)) { return alertError('성별', `성별을 입력해주세요!`);}
		if(!isRequired(birthday)) { return alertError('생년월일', `생년월일을 입력해주세요!`);}
		if(!isRequired(addr)) { return alertError('주소', `주소를 입력해주세요!`);}

		const encryptedData = {
			login_id: id,
			password: encrypt(pw),
			nickname: name,
			email: email,
			phone_number: phoneNumber,
			gender: gender,
			birthday: birthday,
			addr: addr
		};

		console.log(encryptedData);

		const [ data, error ] = await signupUser(encryptedData);
    if (error) {
      console.log(error);
      alertError('로그인 에러', `로그인에 실패했어요.`);
      return;
    }

		alertSuccess('회원가입 완료', '회원가입에 성공했습니다!');
    router.push('/');
    return;
	}

  return (
    <div className="my-5">
			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_name`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"이름"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_name`}
					onChange={(e)=>{setName(e.target.value);}}
					name={"name"}
					value={name}/>
			</div>

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

			<div className={`d-flex mb-3`}>
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

			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_rePW`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"PW 확인"}
				</label>
				<input
					className="w-100"
					type='password'
					id={`signin_rePW`}
					onChange={(e)=>{setRePW(e.target.value);}}
					name={"repw"}
					value={repw} />
			</div>

			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_email`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"이메일"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_email`}
					onChange={(e)=>{setEmail(e.target.value);}}
					name={"email"}
					value={email}/>
			</div>


			<div className="d-flex mb-3">
				<div className="fs-5 col-2">
					성별
				</div>
				<div className={`form-check mx-2`}>
					<input
						className="form-check-input"
						type="radio"
						name={"gender"}
						id={`gender_man`}
						value={gender}
						onChange={()=>{setGender("M");}} />
					<label
						className="fs-5 form-check-label"
						htmlFor={`gender_man`}>
						{"남성"}
					</label>
				</div>

				<div className={`form-check mx-2`}>
					<input
						className="form-check-input"
						type="radio"
						name={"gender"}
						id={`gender_woman`}
						value={gender}
						onChange={()=>{setGender("W");}} />
					<label
						className="fs-5 form-check-label"
						htmlFor={`gender_woman`}>
						{"여성"}
					</label>
				</div>
			</div>

			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_phoneNumber`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"연락처"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_phoneNumber`}
					onChange={(e)=>{setPhoneNumber(e.target.value);}}
					name={"phoneNumber"}
					value={phoneNumber}/>
			</div>

			<div className={`d-flex mb-3`}>
				<label
					htmlFor={`signin_birthday`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"생년월일"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_birthday`}
					onChange={(e)=>{setBirthday(e.target.value);}}
					name={"birthday"}
					value={birthday}/>
			</div>

			<div className={`d-flex mb-5`}>
				<label
					htmlFor={`signin_addr`}
					className="fs-5 col-2"
					style={{color:"#101648"}}>
					{"위치"}
				</label>
				<input
					className="w-100"
					type='text'
					id={`signin_addr`}
					onChange={(e)=>{setAddr(e.target.value);}}
					name={"addr"}
					value={addr}/>
			</div>

			<div
				className="w-100 btn btn-lg text-white"
				style={{backgroundColor:"#101648"}}
				onClick={submit}>
				회원가입
			</div>
    </div>
  )
}
