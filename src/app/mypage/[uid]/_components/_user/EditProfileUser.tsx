'use client';

import { validateID, validateNickname, postUser } from '@/actions/apis/userAPI';
import SignupGenderRadio from '@/app/signup/_components/SignupRadio';
import SignupTextBox from '@/app/signup/_components/SignupTextBox';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { encryptPW } from '@/lib/authUtil';
import { isID, isPassword, isEmail, isRequired, isPhoneNumber } from '@/lib/validator';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

export default function EditProfileUser({ userInfo }) {
  const router = useRouter();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const [repw, setRePW] = useState('');
  const [name, setName] = useState(userInfo.name);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [email, setEmail] = useState(userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone_number);
  const [gender, setGender] = useState(userInfo.gender);
  const [birthday, setBirthday] = useState(userInfo.birthday);
  const [addr, setAddr] = useState(userInfo.addr);

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

  const submit = async () => {
    if (!isID(id)) {
      return alertError('ID', `ID를 8~16자 사이로 숫자와 함께 입력해주세요!`);
    }
    const [vid, vidError] = await validateID(id);
    if (vidError) {
      return alertError('ID', `ID가 중복되었어요!`);
    }
    if (pw != repw) {
      return alertError('PW 확인', `PW를 제대로 입력했는지 확인해주세요!`);
    }
    if (!isPassword(pw)) {
      return alertError('PW', `비밀번호를 8~16자 사이로 입력해주세요!`);
    }
    if (!isEmail(email)) {
      return alertError('이메일', `이메일 형식에 맞게 입력해주세요!`);
    }
    if (!isRequired(name)) {
      return alertError('이름', `이름을 입력해주세요!`);
    }
    if (!isRequired(nickname)) {
      return alertError('별명', `별명을 입력해주세요!`);
    }

    if (userInfo.profile.nickname != nickname) {
      const [vnickname, vnicknameError] = await validateNickname(nickname);
      if (vnicknameError) {
        return alertError('별명', `별명이 중복되었어요!`);
      }
    }

    if (!isPhoneNumber(phoneNumber)) {
      return alertError('연락처', `연락처를 형식에 맞게 입력해주세요!`);
    }
    if (!isRequired(gender)) {
      return alertError('성별', `성별을 입력해주세요!`);
    }
    if (!isRequired(addr)) {
      return alertError('주소', `주소를 입력해주세요!`);
    }

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

    const [data, error] = await postUser(encryptedData);
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
      <SignupTextBox title={'이름'} name={'name'} data={name} setData={setName} explain={''} />
      <SignupTextBox title={'별명'} name={'nickname'} data={nickname} setData={setNickname} explain={''} />
      <SignupTextBox title={'ID'} name={'id'} data={id} setData={setID} explain={''} />
      <SignupTextBox title={'PW'} name={'pw'} data={pw} setData={setPW} type={'password'} explain={''} />
      <SignupTextBox title={'PW 확인'} name={'repw'} data={repw} setData={setRePW} type={'password'} explain={''} />
      <SignupTextBox title={'이메일'} name={'email'} data={email} setData={setEmail} explain={''} />
      <SignupGenderRadio data={gender} setData={setGender} />
      <SignupTextBox
        title={'연락처'}
        name={'phoneNumber'}
        data={phoneNumber}
        setData={handlePhoneNumber}
        explain={''}
      />
      <SignupTextBox
        title={'생년월일'}
        name={'birthday'}
        data={birthday}
        setData={setBirthday}
        type={'date'}
        explain={''}
      />
      <SignupTextBox title={'위치'} name={'addr'} data={addr} setData={setAddr} explain={''} />
      <div
        className="btn"
        style={{
          backgroundColor: '#314FC0',
          color: 'white',
          width: '100%',
          padding: '10px',
        }}
        onClick={submit}
      >
        회원정보 수정
      </div>
    </div>
  );
}
