import SearchBox from "@/components/forms/SearchBox";
import Card from "@/components/home/Card";
import Icon from "@/components/home/Icon";

export default function Home() {
  return (
    <main className={`container px-5`}>
      {/* search bar */}
      <div className={`my-5`}>
        <SearchBox
          className="text-black"
          placeholder={"search"}
        />
      </div>

      {/*  */}
      <div className={`my-5 row`}>
        <img
          className="col-10 p-0"
          alt="main post"
          src="truss_logo.png"
          height={500}
        />
        <img
          className="col-2 p-0"
          alt="main post"
          src="truss_logo.png"
        />
      </div>

      <div className={`my-5`}>
        <div className="fw-bold mb-5 fs-5 text-black">
          관심있는 건축을 선택해보세요!
          <div className="d-flex">
            <Icon url={"/"}>모듈형주택</Icon>
            <Icon url={"/"}>일반주택</Icon>
            <Icon url={"/"}>다세대주택</Icon>
            <Icon url={"/"}>상가주택</Icon>
            <Icon url={"/"}>상가</Icon>
          </div>
        </div>
      </div>

      <div className={`my-5`}>
        <div className="fw-bold mb-5 fs-5 text-black">
          인기 건축칼럼을 확인해보세요!
          <div className="d-flex justify-content-center">
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
          </div>
        </div>
      </div>

      <div className={`my-5`}>
        <div className="fw-bold mb-5 fs-5 text-black">
          건축이 처음이라면? 확인해야 할 정보!
          <div className="d-flex justify-content-center">
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
          </div>
        </div>
      </div>

      <div className={`my-5`}>
        <div className="fw-bold mb-5 fs-5 text-black">
          건축주들의 고민상담소, 만담장소
          <div className="d-flex justify-content-center">
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
            <Card url={"/"}></Card>
          </div>
        </div>
      </div>
    </main>
  );
}