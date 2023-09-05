"use client"

import { useRouter } from "next/navigation";
import Radios from "@/components/forms/Radios";
import SubmitButton from "@/components/forms/SubmitButton";
import TextBox from "@/components/forms/Textbox";
import useForm from "@/hooks/useForm";
import { isRequired } from "@/utils/validator";
import { postPerson } from "@/api/personAPI";

type personalInfo = {
  name: string;
  phoneNumber: string;
  type: "일반주택" | "다가구주택" | "상가주택" | "상가" | "기타";
  location: string;
  agree: boolean;
}

const validate = (values: personalInfo) => {
  const errors = {
    name: isRequired(values.name),
    phoneNumber: isRequired(values.phoneNumber),
    type: isRequired(values.type),
    agree: isRequired(values.agree)
  };

  return errors;
};

export default function Home() {
  const router = useRouter();
  const callback = async (values: personalInfo) => {
    const { data,error } = await postPerson(values);
    if (error) console.log(error);
    else console.log(data);
  
    router.replace("/review3");
    return;
  };

  const { handleChange, handleClick, handleSubmit, values, errors } = useForm(callback, validate);

  return (
    <main className={`container my-5`}>
      <div className={`p-5 rounded-3`} style={{backgroundColor:"#101648"}}>
        <div className="fw-bold mb-5 fs-5 text-white">
          안녕하십니까, 트러스팀입니다.<br/>
          트러스는 건설시장 내 건축주와 건설사간 정보의 비대칭을 해소하고자 건축주들이 건설사들의 리뷰를 남길 수 있는 공간을 제공하고자 합니다.<br/><br/>
          폐쇄적인 건설 시장의 문제를 {"'"}건축주의 리뷰{"'"}를 통해 투명하고 합리적인 시장으로의 변화를 만들어가고자 합니다.<br/>
          이를 위한 처음 단계로 {"'"}건설사 리뷰 공간{"'"}의 첫 리뷰어 여러분을 모시고 있습니다.<br/>
          리뷰어님의 실제 건설 공사를 통해 얻은 귀중한 경험을 바탕으로 소중한 리뷰를 남겨주시면, 플랫폼이 더 나은 방향으로 나아갈 수 있을 것입니다.<br/><br/>
          개인정보는 공개하지 않으며, 리뷰를 웹페이지에 게재한 이후에는 직접 확인하실 수 있도록 링크를 발송하도록 하겠습니다!<br/>
          감사합니다. 좋은 하루 되세요!
        </div>

        <form id="signupForm" className="needs-validation" noValidate>
          <div className="row g-3">
            {/*이름*/}
            <TextBox
              name="name"
              id="name"
              label="이름을 입력해주세요.(응답자 확인을 위한 용도로서 공개하지 않습니다.)"
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
              label="연락 가능하신 연락처를 입력해주세요.(응답자 확인을 위한 용도로서 공개하지 않습니다.)"
              type="phoneNumber"
              placeholder="01012341234"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['phoneNumber']}
              error={errors['phoneNumber']}
            />

            {/*건축 종류*/}
            <Radios
              name="type"
              id="type"
              label="진행하셨던 건축의 종류를 선택해주세요."
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['type']}
              error={errors['type']}
              >
              {["일반주택", "다가구주택", "상가주택", "상가", "기타"]}
            </Radios>

            {/*위치*/}
            <TextBox
              name="location"
              id="location"
              label="진행하셨던 건축물의 위치를 입력해주세요. (시/군/구)(비공개를 원하시면 점을 찍어 제출해주세요.)"
              type="location"
              placeholder="경기도 용인시"
              disabled={false}
              readonly={false}
              handleChange={handleChange}
              handleClick={handleClick}
              value={values['location']}
              error={errors['location']}
            />
          
            <div className="fw-bold text-white mt-4">
              1. 수집항목: 휴대전화번호, 주소, 계약서 내 계약자 정보수집 및 이용 목적: 이용자 식별, 리뷰 작성에 따른 보상 지급, 서비스 활용(집합건물명까지의 주소 및 평형정보 등은 노출기준 수립 등 작성하신 리뷰의 원활한 노출을 위해 이용됩니다), 서비스 개선을 위한 데이터 통계 및 분석, 맞춤형 콘텐츠 및 서비스 등 제공 또는 추천<br/>
              2. 보유 및 이용 기간: 동의 철회시까지. 단, 관련 법령의 규정에 따라 거래 관계 확인을 위해 개인정보를 일정기간 보유할 수 있습니다.<br/>
              3. 개인정보 수집에 동의하지 않으실 수 있으며, 동의하지 않는 경우 리뷰 작성 및 노출이 제한될 수 있습니다.<br/>
            </div>
            <div className="form-check ms-1 mb-5">
              <label className="form-check-label text-white" htmlFor="save-info">
                동의합니다.
              </label>
              <input
                name="agree"
                type="checkbox"
                className="form-check-input"
                id="save-info"
                onChange={handleChange}
                onClick={handleClick}
                value={values['agree']}
              />
            </div>
          </div>

          <SubmitButton
            title={'다음 페이지로'}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            keys={["name", "phoneNumber", "type", "location", "agree"]}
            allRequired={true}
          />
        </form>
      </div>
    </main>
  );
}