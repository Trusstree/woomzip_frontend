import { SelectDeliveryComponent } from "@/components/forms/SelectDeliveryComponent";

type HouseDeliveryComponentProps = {
  setDeliveryInfo: Function;
};

export function HouseDeliveryComponent(props: HouseDeliveryComponentProps) {
  const { setDeliveryInfo } = props;
  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTopStyle: "solid",
        borderTopColor: "#101648",
        borderTopWidth: "2px",
      }}
    >
      <h3 className="fw-bold mb-4">배송 정보를 입력해주세요.</h3>
      <SelectDeliveryComponent
        title={"배송 불가능 지역"}
        name={"delivery_unavailable"}
        onChange={setDeliveryInfo}
        dataList={[
          "없음(전국 배송 가능)",
          "제주도",
          "전라남도",
          "전라북도",
          "경상남도",
          "경상북도",
          "충청남도",
          "충청북도",
          "경기남부",
          "경기북부",
          "강원도",
          "서울",
        ]}
      />
    </div>
  );
}
