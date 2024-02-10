"use client"

import { signinUser } from "@/api/securityAPI";
import useForm from "@/hooks/useForm";
import { isRequired } from "@/lib/validator";
import SigninBox from "./SigninBox";
import SubmitButton from "./SubmitButton";
import { encrypt, getUserdataByToken } from "@/lib/security";
import { setUserInfo } from "@/lib/cookieUtil";

type Signin = {
  id: string
  password: string
}

type SigninFormProps = {
  
}

const validate = (values: Signin) => {
  const errors = {
    id: isRequired(values.id),
    password: isRequired(values.password),
  };

  return errors;
};

export default function SigninForm(props: SigninFormProps) {
  const {} = props;

  const callback = async (values: Signin) => {
    const { data,error } = await signinUser({...values, password:encrypt(values.password)});
    if (error) {console.log(error); return;}
    
    console.log(data);

    const userInfo = getUserdataByToken(data);
    setUserInfo(userInfo);

    return;
  };

  const { handleChange, handleClick, handleSubmit, values, errors } = useForm(callback, validate);

  return (
    <div>
      <h1 className="h3 mb-3 fw-normal text-center">Sign-in</h1>
      {/* ID 입력란 */}
      <SigninBox
          name="id"
          id="id"
          label="ID"
          type="id"
          placeholder="ID"
          handleChange={handleChange}
          handleClick={handleClick}
          value={values['id']}
          error={errors['id']}
        />

      {/* Password 입력란 */}
        <SigninBox
          name="password"
          id="password"
          label="PW"
          type="password"
          placeholder="Password"
          handleChange={handleChange}
          handleClick={handleClick}
          value={values['password']}
          error={errors['password']}
        />

      <SubmitButton
      className={"my-3"}
      title={"로그인"}
      handleSubmit={ handleSubmit }
      values={values}
      errors={errors}
      keys={["id", "password"]}
      allRequired={true}/>
    </div>
  );
}