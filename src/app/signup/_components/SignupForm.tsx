'use client';

import { signupUser, validateID, validateNickname } from '@/actions/apis/userAPI';
import SignupGenderRadio from '@/app/signup/_components/SignupRadio';
import SignupTextBox from '@/app/signup/_components/SignupTextBox';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { encryptPW } from '@/lib/authUtil';
import { isEmail, isID, isPassword, isPhoneNumber, isRequired } from '@/lib/validator';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SignupForm() {
  const router = useRouter();
  const [id, setID] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  const [pw, setPW] = useState('');
  const [repw, setRePW] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('1970-01-01');
  const [addr, setAddr] = useState('');

  const handlePhoneNumber = (e) => {
    const regex = new RegExp(/^[0-9\b -]{0,13}$/);
    if (regex.test(e)) setPhoneNumber(e);
  };

  useEffect(() => {
    if (phoneNumber.length === 10) setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    if (phoneNumber.length === 11) setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    if (phoneNumber.length === 13)
      setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    if (phoneNumber.length === 14)
      setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  }, [phoneNumber]);

  const idCheckFunc = async () => {
    console.log(id);
    if (!isID(id)) {
      alertError('ID', `ID를 8~16자 사이로 숫자와 함께 입력해주세요!`);
      setIdCheck(false);
      return;
    }

    const [vid, vidError] = await validateID(id);
    if (vidError) {
      alertError('ID', `ID가 중복되었어요!`);
      setIdCheck(false);
      return;
    }
    alertSuccess('ID', `사용가능한 ID에요!`);
    setIdCheck(true);
  };

  const nicknameCheckFunc = async () => {
    if (!isRequired(nickname)) {
      alertError('별명', `별명을 입력해주세요!`);
      setNicknameCheck(false);
      return;
    }

    const [vnickname, vnicknameError] = await validateNickname(id);
    if (vnicknameError) {
      alertError('별명', `별명이 중복되었어요!`);
      setNicknameCheck(false);
      return;
    }
    alertSuccess('별명', `사용가능한 별명이에요!`);
    setNicknameCheck(true);
  };

  const submit = async () => {
    // 유효성검사는 필수
    if (
      !validate({
        idCheck,
        pw,
        repw,
        name,
        nicknameCheck,
        phoneNumber,
        email,
        gender,
        addr,
      })
    )
      return;

    const encryptedData = {
      login_id: id,
      password: encryptPW(pw),
      name: name,
      nickname: nickname,
      email: email,
      phone_number: phoneNumber,
      gender: gender,
      birthday: birthday,
      addr: addr,
    };

    const [data, error] = await signupUser(encryptedData);
    if (error) {
      console.log(error);
      alertError('로그인 에러', error.message || `회원가입에 실패했어요.`);
      return;
    }

    alertSuccess('회원가입 완료', '회원가입에 성공했습니다!');
    router.push('/signin');
    return;
  };

  return (
    <div className="my-5">
      <SignupTextBox title={'이름'} name={'name'} data={name} setData={setName} />
      <SignupTextBox
        title={'별명'}
        name={'nickname'}
        data={nickname}
        setData={setNickname}
        checked
        isChecked={idCheck}
        checkedFunction={nicknameCheckFunc}
      />

      <SignupTextBox
        title={'ID'}
        name={'id'}
        data={id}
        setData={setID}
        explain={'*8자리 이상 입력해주세요'}
        checked
        isChecked={idCheck}
        checkedFunction={idCheckFunc}
      />
      <SignupTextBox
        title={'PW'}
        name={'pw'}
        data={pw}
        setData={setPW}
        type={'password'}
        explain={'*영문+숫자 조합으로 8자리 이상 입력해주세요'}
      />
      <SignupTextBox
        title={'PW 확인'}
        name={'repw'}
        data={repw}
        setData={setRePW}
        type={'password'}
        explain={pw != repw && '비밀번호가 맞지 않습니다.'}
      />
      <SignupTextBox title={'이메일'} name={'email'} data={email} setData={setEmail} />
      <SignupGenderRadio data={gender} setData={setGender} />
      <SignupTextBox title={'연락처'} name={'phoneNumber'} data={phoneNumber} setData={handlePhoneNumber} />
      <SignupTextBox title={'생년월일'} name={'birthday'} data={birthday} setData={setBirthday} type={'date'} />
      <div
        className="btn"
        style={{
          backgroundColor: 'black',
          color: '#ffffff',
          width: '100%',
          padding: '10px',
          borderRadius: '25px',
          marginTop: '20px',
        }}
        onClick={submit}
      >
        회원가입
      </div>
    </div>
  );
}

const validate = ({ idCheck, pw, repw, name, nicknameCheck, phoneNumber, email, gender, addr }) => {
  if (!idCheck) {
    alertError('ID', `확인 버튼을 통해 중복체크를 해주세요.`);
    return false;
  }
  if (pw != repw) {
    alertError('PW 확인', `PW를 제대로 입력했는지 확인해주세요!`);
    return false;
  }
  if (!isPassword(pw)) {
    alertError('PW', `비밀번호를 8~16자 사이로 입력해주세요!`);
    return false;
  }
  if (!isEmail(email)) {
    alertError('이메일', `이메일 형식에 맞게 입력해주세요!`);
    return false;
  }
  if (email.length > 50) {
    alertError('이메일', `이메일이 너무 길어서 입력이 되지 않습니다. 대표자 번호로 문의 남겨주세요 ㅠㅠ`);
    return false;
  }
  if (!isRequired(name)) {
    alertError('이름', `이름을 입력해주세요!`);
    return false;
  }
  if (!nicknameCheck) {
    alertError('닉네임', `확인 버튼을 통해 중복체크를 해주세요.`);
    return false;
  }
  if (!isPhoneNumber(phoneNumber)) {
    alertError('연락처', `연락처를 형식에 맞게 입력해주세요!`);
    return false;
  }
  if (!isRequired(gender)) {
    alertError('성별', `성별을 입력해주세요!`);
    return false;
  }

  return true;
};
