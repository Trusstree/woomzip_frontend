import RouteButton from "@/app/living/[pid]/_components/RouteButton";

export default function Home() {
  return (
    <div>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>어드민 페이지</h1>
      </div>
      <div className="d-flex mb-5">
        <RouteButton className="m-5" url={"/admin/living"} text={"살아보기"}></RouteButton>
        <RouteButton className="m-5" url={"/admin/planning"} text={"계획하기"}></RouteButton>
        <RouteButton className="m-5" url={"/admin/company"} text={"기업가입"}></RouteButton>
      </div>
    </div>
  );
}
