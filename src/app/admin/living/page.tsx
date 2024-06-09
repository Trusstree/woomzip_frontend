import { AdminConfirmCard } from "@/app/admin/living/_components/AdminConfirmCard";
import { RouteButton } from "@/app/living/[pid]/_components/RouteButton";

const livingData = {
  company: "모두가하우징",
  title: "힐링리버",
  addr: "강원도 화천군",
  img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
  url: `/living/1`,
};

export default function AdminLiving() {
  return (
    <div>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>어드민 페이지</h1>
        <h1>체험관 예약 확인</h1>
      </div>
      <div className="d-flex mb-5">
        <AdminConfirmCard className="m-5 col-4" url={`/admin/living/${1}`} title={"살아보기"} src={livingData["img"]}>
          <span>회사: {livingData["company"]}</span>
          <br />
          <span>체험관 이름: {livingData["title"]}</span>
          <br />
          <span>주소: {livingData["addr"]}</span>
        </AdminConfirmCard>
      </div>
    </div>
  );
}
