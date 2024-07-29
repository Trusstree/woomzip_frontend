import PlanningCardList from "@/app/admin/planning/_components/PlanningCardList";

export default function Home() {
  return (
    <div>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>어드민 페이지</h1>
        <h1>집 계획하기</h1>
      </div>
      <div className="d-flex mb-5">
        <PlanningCardList />
      </div>
    </div>
  );
}
