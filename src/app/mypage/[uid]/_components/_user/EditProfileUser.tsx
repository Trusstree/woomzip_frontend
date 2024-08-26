'use client';

import { validateNickname, updateUser } from '@/actions/apis/userAPI';
import SignupGenderRadio from '@/app/signup/_components/SignupRadio';
import SignupTextBox from '@/app/signup/_components/SignupTextBox';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { isEmail, isRequired, isPhoneNumber } from '@/lib/validator';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

export default function EditProfileUser({ userInfo }) {
  const router = useRouter();
  const [name, setName] = useState(userInfo.name);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [email, setEmail] = useState(userInfo.email);
  const [oneLineIntroduce, setOneLineIntroduce] = useState(userInfo.one_line_introduce);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone_number);
  const [gender, setGender] = useState(userInfo.gender);
  const [birthday, setBirthday] = useState(userInfo.birthday);

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
    if (!isRequired(name)) {
      return alertError('이름', `이름을 입력해주세요!`);
    }
    if (!isRequired(nickname)) {
      return alertError('별명', `별명을 입력해주세요!`);
    }
    if (userInfo.nickname != nickname) {
      const [vnickname, vnicknameError] = await validateNickname(nickname);
      if (vnicknameError) {
        return alertError('별명', `별명이 중복되었어요!`);
      }
    }
    if (!isEmail(email)) {
      return alertError('이메일', `이메일 형식에 맞게 입력해주세요!`);
    }
    if (!isPhoneNumber(phoneNumber)) {
      return alertError('연락처', `연락처를 형식에 맞게 입력해주세요!`);
    }
    if (!isRequired(gender)) {
      return alertError('성별', `성별을 입력해주세요!`);
    }

    const parsedData = {
      name: name,
      nickname: nickname,
      email: email,
      one_line_introduce: oneLineIntroduce,
      phone_number: phoneNumber,
      gender: gender,
      birthday: birthday,
      addr: '',
    };

    console.log(userInfo);
    const [data, error] = await updateUser(parsedData);
    if (error) {
      console.log(error);
      alertError('프로필 수정 에러', error.message || `프로필 수정에 실패했어요.`);
      return;
    }

    alertSuccess('프로필 수정 완료', '프로필이 성공적으로 수정되었습니다!');
    router.push(`/mypage/${userInfo.fk_user_id}`);
  };

  return (
    <div className="my-5">
      <SignupTextBox title={'이름'} name={'name'} data={name} setData={setName} />
      <SignupTextBox title={'별명'} name={'nickname'} data={nickname} setData={setNickname} />
      <SignupTextBox title={'이메일'} name={'email'} data={email} setData={setEmail} />
      <SignupTextBox
        title={'한 줄 설명'}
        name={'oneLineIntroduce'}
        data={oneLineIntroduce}
        setData={setOneLineIntroduce}
      />
      <SignupGenderRadio data={gender} setData={setGender} />
      <SignupTextBox title={'연락처'} name={'phoneNumber'} data={phoneNumber} setData={handlePhoneNumber} />
      <SignupTextBox title={'생년월일'} name={'birthday'} data={birthday} setData={setBirthday} type={'date'} />
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
