"use client"

import { useRouter } from "next/navigation";
import Radios from "@/components/forms/Radios";
import SubmitButton from "@/components/forms/SubmitButton";
import TextBox from "@/components/forms/Textbox";
import useForm from "@/hooks/useForm";
import { isRequired } from "@/utils/validator";
import { satisfaction } from "@/types/form";
import TextArea from "@/components/forms/TextArea";
import { postOffice } from "@/api/officeAPI";
import { alertSuccess } from "@/utils/alertSuccess";

type office = {
  officeType: string;
  officeName: string;
  communication: satisfaction;
  price: satisfaction;
  result: satisfaction;
  keepingDeadline: satisfaction;
  afterService: satisfaction;
  satisfaction: string;
  description: string;
}

const validate = (values: office) => {
  const errors = {
    officeType: isRequired(values.officeType),
    officeName: isRequired(values.officeName),
    communication: isRequired(values.communication),
    price: isRequired(values.price),
    result: isRequired(values.result),
    keepingDeadline: isRequired(values.keepingDeadline),
    afterService: isRequired(values.afterService),
    satisfaction: isRequired(values.satisfaction),
    description: isRequired(values.description),
  } as office;

  return errors;
};

export default function Home() {
  const router = useRouter();
  const callback = async (values: office) => {
    const { data,error } = await postOffice({...values, officeType:"건축사사무소"});
    if (error) console.log(error);
    else console.log(data);
  
    alertSuccess('감사합니다!', '요청사항 저장이 완료되었습니다<br>리뷰 남겨주셔서 진심으로 감사드립니다!');
    router.replace("/");
    return;
  };

  const { handleChange, handleClick, handleSubmit, values, errors } = useForm(callback, validate);

  return (
    <main className={`container my-5`}>
      <div className={`p-5 rounded-3`} style={{backgroundColor:"#101648"}}>
        <div className="fw-bold mb-5 fs-5 text-white">
        이용하셨던 건축사사무소에 대한 리뷰 입니다.
        </div>

        <form id="signupForm" className="needs-validation" noValidate>
          <div className="row g-3">
            {/*이름*/}
            <TextBox
              name="officeName"
              id="officeName"
              label="이용하셨던 건축사사무소 이름 / 위치를 입력해주세요. (시/군/구)"
              type="officeName"
              placeholder="(주)00건축사사무소/용인시"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['officeName']}
              error={errors['officeName']}
            />

            {/*소통 만족도*/}
            <Radios
              name="communication"
              id="communication"
              label="소통 만족도 (상담, 계약, 시공 전반적인 과정에서 건축사사무소와의 소통 만족도입니다.)"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['communication']}
              error={errors['communication']}
            >
              {["매우 만족", "만족", "보통", "불만족", "매우 불만족"]}
            </Radios>

            {/*가격 만족도*/}
            <Radios
              name="price"
              id="price"
              label="가격 만족도 (설계 결과 대비 설계 금액이 적정한지에 대한 만족도 입니다.)"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['price']}
              error={errors['price']}
            >
              {["매우 만족", "만족", "보통", "불만족", "매우 불만족"]}
            </Radios>

            {/*시공결과 만족도*/}
            <Radios
              name="result"
              id="result"
              label="시공결과 만족도 (설계의 퀄리티와 요구 반영 여부 등 전반적인 결과에 대한 만족도 입니다.)"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['result']}
              error={errors['result']}
            >
              {["매우 만족", "만족", "보통", "불만족", "매우 불만족"]}
            </Radios>
          
            {/*일정준수 만족도*/}
            <Radios
              name="keepingDeadline"
              id="keepingDeadline"
              label="일정준수 만족도 (협약한 일정대로 차질 없이 진행되었는지에 대한 평가입니다.)"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['keepingDeadline']}
              error={errors['keepingDeadline']}
            >
              {["매우 만족", "만족", "보통", "불만족", "매우 불만족"]}
            </Radios>

            {/*A/S 만족도*/}
            <Radios
              name="afterService"
              id="afterService"
              label="A/S 만족도 (건축사사무소의 A/S 보장에 대한 신뢰도 및 실행력에 대한 만족도입니다.)"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['afterService']}
              error={errors['afterService']}
            >
              {["매우 만족", "만족", "보통", "불만족", "매우 불만족"]}
            </Radios>

            {/*일정준수 만족도*/}
            <Radios
              name="satisfaction"
              id="satisfaction"
              label="해당 건축사사무소의 전체적인 만족도를 평가해주세요."
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['satisfaction']}
              error={errors['satisfaction']}
            >
              {["10","9","8","7","6","5","4","3","2","1"]}
            </Radios>

            {/*이름*/}
            <TextArea
              name="description"
              id="description"
              label="해당 건축사사무소의 서비스와 건축 전반에 대하여 전체적인 후기를 부탁드립니다."
              type="description"
              placeholder=""
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['description']}
              error={errors['description']}
            />
          </div>

          <SubmitButton
            title={'제출하기'}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            keys={['officeName', 'communication', 'price', 'result', 'keepingDeadline', 'afterService', 'satisfaction', 'description']}
            allRequired={true}
          />
        </form>
      </div>
    </main>
  );
}