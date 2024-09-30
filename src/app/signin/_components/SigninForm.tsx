'use client';

import { signinUser } from '@/actions/apis/userAPI';
import { useUser } from '@/app/_components/ContextSession';
import { alertError } from '@/lib/alertUtil';
import { getUserdataByToken } from '@/lib/parseUtil';
import { encryptPW } from '@/lib/authUtil';
import { isID, isPassword, isRequired } from '@/lib/validator';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const validate = ({ id, pw }) => {
  // 유효성 검사부터
  if (!isRequired(id)) {
    alertError('로그인 에러', `아이디를 입력했는지 확인해주세요.`);
    return false;
  }
  if (!isRequired(pw)) {
    alertError('로그인 에러', `비밀번호를 입력했는지 확인해주세요.`);
    return false;
  }
  if (!isID(id)) {
    alertError('로그인 에러', `아이디가 8~16자인지 확인해주세요.`);
    return false;
  }
  if (!isPassword(pw)) {
    alertError('로그인 에러', `비밀번호가 8~16자인지 확인해주세요.`);
    return false;
  }
  return true;
};

export function SigninForm() {
  const router = useRouter();
  const { setUserContext } = useUser();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');

  const submit = async () => {
    if (!validate({ id, pw })) return;

    const encryptedData = {
      login_id: id,
      password: encryptPW(pw),
    };

    const [data, error] = await signinUser(encryptedData);

    if (error) {
      console.log(error);
      alertError('로그인 에러', error.response?.data?.message || `로그인에 실패했어요.`);
      return;
    }
    const userData = getUserdataByToken(data.data.access_token);
    setUserContext({
      uid: userData.uid,
      role: userData.role,
      at: data.data.access_token,
    });
    console.log({
      uid: userData.uid,
      role: userData.role,
      at: data.data.access_token,
    });
    router.push('/');
    return;
  };

  const submitEnter = async (e)=>{
    if(e.key != 'Enter') return;
    submit();
  }

  return (
    <div className="my-5">
      <div className={`d-flex mb-3`}>
        <label htmlFor={`signin_ID`} className="fs-5 col-2">
          {'ID'}
        </label>
        <input
          className="w-100"
          type="text"
          id={`signin_ID`}
          onChange={(e) => {
            setID(e.target.value);
          }}
          onKeyDown={submitEnter}
          name={'id'}
          value={id}
        />
      </div>

      <div className={`w-100 d-flex mt-3 mb-5`}>
        <label htmlFor={`signin_PW`} className="fs-5 col-2" style={{ color: '#101648' }}>
          {'PW'}
        </label>
        <input
          className="w-100"
          type="password"
          id={`signin_PW`}
          onChange={(e) => {
            setPW(e.target.value);
          }}
          onKeyDown={submitEnter}
          name={'pw'}
          value={pw}
        />
      </div>

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
        로그인 하기
      </div>
    </div>
  );
}
