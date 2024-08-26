'use client';

import { validateNickname, updateUser } from '@/actions/apis/userAPI';
import SignupGenderRadio from '@/app/signup/_components/SignupRadio';
import SignupTextArea from '@/app/signup/_components/SignupTextArea';
import SignupTextBox from '@/app/signup/_components/SignupTextBox';
import InputImageComponent from '@/components/InputImageComponent';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { isEmail, isRequired, isPhoneNumber } from '@/lib/validator';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

export default function EditProfileCompany({ companyInfo }) {
  const router = useRouter();
  const [name, setName] = useState(companyInfo.profile.name);
  const [thumbnail, setThumbnail] = useState([companyInfo.profile.user_img_url]);
  const [introduce, setIntroduce] = useState(companyInfo.profile.one_line_introduce);
  const [nickname, setNickname] = useState(companyInfo.profile.nickname);
  const [email, setEmail] = useState(companyInfo.profile.email);
  const [phoneNumber, setPhoneNumber] = useState(companyInfo.profile.phone_number);
  const [gender, setGender] = useState(companyInfo.profile.gender);
  const [birthday, setBirthday] = useState(companyInfo.profile.birthday);
  const [companyImages, setCompanyImages] = useState(companyInfo.images);
  const [addr, setAddr] = useState(companyInfo.profile.addr);
  const [prUrl, setPrUrl] = useState(companyInfo.profile.company_url);
  const [youtubeUrl, setYoutubeUrl] = useState(companyInfo.profile.pr_url);

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
    if (introduce.length > 30) {
      alertError('한 줄 설명', `한 줄 설명이 너무 길어요. 30자 이내로 작성부탁드려요!`);
    }
    if (!isEmail(email)) {
      return alertError('이메일', `이메일 형식에 맞게 입력해주세요!`);
    }
    if (email.length > 50) {
      return alertError('이메일', `이메일이 너무 길어서 입력이 되지 않습니다. 대표자 번호로 문의 남겨주세요 ㅠㅠ`);
    }
    if (!isRequired(name)) {
      return alertError('이름', `이름을 입력해주세요!`);
    }
    if (!isRequired(nickname)) {
      return alertError('별명', `별명을 입력해주세요!`);
    }
    if (companyInfo.profile.nickname != nickname) {
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
    if (!isRequired(prUrl)) {
      return alertError('홈페이지 주소', `홈페이지 주소를 입력해주세요!`);
    }
    if (!isRequired(youtubeUrl)) {
      return alertError('홍보채널', `홍보채널을 입력해주세요!`);
    }

    if (companyImages.length < 1) {
      return alertError('회사 프로필사진', '회사 프로필 사진을 입력해주세요!');
    }

    if (companyImages.length < 5) {
      return alertError('홍보사진', '회사 사진을 적어도 5장 이상 입력해주세요!');
    }

    const parsedData = {
      name: name,
      nickname: nickname,
      user_img_url: thumbnail[0],
      one_line_introduce: introduce,
      phone_number: phoneNumber,
      email: email,
      gender: gender,
      birthday: birthday,
      addr: addr,
      company_url: prUrl,
      pr_url: youtubeUrl,
      company_images: companyImages,
    };

    const [data, error] = await updateUser(parsedData);
    if (error) {
      console.log(error);
      alertError('프로필 수정 에러', error.message || `프로필 수정에 실패했어요.`);
      return;
    }

    alertSuccess('프로필 수정 완료', '프로필이 성공적으로 수정되었습니다!');
    router.push(`/mypage/${companyInfo.profile.user_profile_id}`);
  };

  return (
    <div className="my-5">
      <SignupTextBox
        title={'이름'}
        name={'name'}
        data={name}
        setData={setName}
        explain={'*기업회원은 대표자명을 입력해주세요'}
      />
      <SignupTextBox
        title={'별명'}
        name={'nickname'}
        data={nickname}
        setData={setNickname}
        explain={'*기업회원은 회사명을 입력해주세요'}
      />
      <SignupTextBox title={'이메일'} name={'email'} data={email} setData={setEmail} />
      <SignupTextArea
        title={'한 줄 설명'}
        name={'introduce'}
        data={introduce}
        setData={setIntroduce}
        explain={'*회사를 표현할 수 있는 한 줄 소개글을 작성해주세요 (업체 프로필에 노출됩니다)'}
      />
      <SignupGenderRadio data={gender} setData={setGender} />
      <SignupTextBox title={'연락처'} name={'phoneNumber'} data={phoneNumber} setData={handlePhoneNumber} />
      <SignupTextBox title={'개업일'} name={'birthday'} data={birthday} setData={setBirthday} type={'date'} />

      <div className="row">
        <div className="col-2" style={{ fontSize: '18px' }}>
          프로필 사진
        </div>
        <div className="col-10">
          <InputImageComponent
            s3Url={`users/company`}
            name={'profile'}
            images={thumbnail}
            setImages={setThumbnail}
            maxLength={1}
          />
          <div style={{ fontSize: '13px', color: 'blue', marginBottom: '10px' }}>
            *1장의 대표 프로필 사진을 업로드 해주세요 (업체명 옆에 노출됩니다)
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2" style={{ fontSize: '18px' }}>
          대문 사진
        </div>
        <div className="col-10">
          <InputImageComponent
            s3Url={`users/company`}
            name={'portfolio'}
            images={companyImages}
            setImages={setCompanyImages}
          />
          <div style={{ fontSize: '13px', color: 'blue', marginBottom: '10px' }}>
            *최소 7장의 포트폴리오 사진을 업로드 해주세요 (업체 프로필에 노출됩니다)
          </div>
        </div>
      </div>

      <SignupTextBox
        title={'위치'}
        name={'addr'}
        data={addr}
        setData={setAddr}
        explain={'*본사 주소/공장 주소 모두 입력해주세요'}
      />
      <SignupTextBox
        title={'홈페이지 주소'}
        name={'prUrl'}
        data={prUrl}
        setData={setPrUrl}
        explain={'*현재 운영중인 자체 홈페이지 주소를 입력해주세요'}
      />
      <SignupTextBox
        title={'홍보채널 주소'}
        name={'youtubeUrl'}
        data={youtubeUrl}
        setData={setYoutubeUrl}
        explain={'*현재 운영중인 홍보채널(유튜브, 블로그 등) 주소를 입력해주세요'}
      />

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
        정보 수정하기
      </div>
    </div>
  );
}
