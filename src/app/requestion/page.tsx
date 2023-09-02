"use client"

import { useRouter } from "next/navigation";
import SubmitButton from "@/components/forms/SubmitButton";
import TextBox from "@/components/forms/Textbox";
import useForm from "@/hooks/useForm";
import { isRequired } from "@/utils/validator";
import TextArea from "@/components/forms/TextArea";
import { postRequestion } from "@/api/requestionAPI";
import { alertSuccess } from "@/utils/alertSuccess";

type requestion = {
  name: string;
  phoneNumber: string;
  type: string;
  businessName: string;
  location: string;
  purpose: string;
}

const validate = (values: requestion) => {
  const errors = {
    name: isRequired(values.name),
    sotong: isRequired(values.phoneNumber),
    price: isRequired(values.type),
    sigongResult: isRequired(values.businessName),
    dateJunsu: isRequired(values.location),
    afterService: isRequired(values.purpose)
  };

  return errors;
};

export default function Home() {
  const router = useRouter();
  const callback = async (values: requestion) => {
    const { data,error } = await postRequestion(values);
    if (error) console.log(error);
    else console.log(data);
  
    alertSuccess('감사합니다!', '요청사항 저장이 완료되었습니다.<br>해당 업체의 후기가 올라오면 바로 알려드리겠습니다.');
    router.replace("/");
    return;
  };

  const { handleChange, handleClick, handleSubmit, values, errors } = useForm(callback, validate);

  return (
    <main className={`container my-5`}>
      <div className={`p-5 rounded-3`} style={{backgroundColor:"#101648"}}>
        <div className="fw-bold mb-5 fs-5 text-white">
          찾으시는 건설사의 후기가 없다면 트러스에게 요청하세요.<br/>
          해당 업체의 후기가 올라오면 바로 알려드리겠습니다.
        </div>

        <form id="signupForm" className="needs-validation" noValidate>
          <div className="row g-3">
            {/*이름*/}
            <TextBox
              name="name"
              id="name"
              label="이름을 입력해주세요."
              type="name"
              placeholder="트러스"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['name']}
              error={errors['name']}
            />

            {/*연락처*/}
            <TextBox
              name="phoneNumber"
              id="phoneNumber"
              label="연락받으실 연락처를 입력해주세요."
              type="phoneNumber"
              placeholder="01012341234"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['phoneNumber']}
              error={errors['phoneNumber']}
            />

            {/*업체 종류*/}
            <TextBox
              name="type"
              id="type"
              label="해당 업체의 종류를 선택해주세요."
              type="type"
              placeholder="시공사"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['type']}
              error={errors['type']}
            />

            {/*상호명*/}
            <TextBox
              name="businessName"
              id="businessName"
              label="해당 업체의 상호명을 정확하게 입력해주세요."
              type="businessName"
              placeholder="(주)트러스"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['businessName']}
              error={errors['businessName']}
            />

            {/*위치*/}
            <TextBox
              name="location"
              id="location"
              label="해당 업체의 위치를 자세하게 입력해주세요."
              type="location"
              placeholder="트러스"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['location']}
              error={errors['location']}
            />

            {/* 요청목적 */}
            <TextArea
              name="purpose"
              id="purpose"
              label="해당 업체의 후기를 요청하시는 목적을 알려주세요."
              type="purpose"
              placeholder=""
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['purpose']}
              error={errors['purpose']}
            />
          </div>

          <SubmitButton
            title={'제출하기'}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            keys={['name', 'phoneNumber', 'type', 'businessName', 'location', 'purpose']}
            allRequired={true}
          />
        </form>
      </div>
    </main>
  );
}