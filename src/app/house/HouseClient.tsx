"use client";

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useState } from "react";
import SearchBox from "@/components/house/SearchBox";
import FillteringButton from "@/components/house/FillteringButton";
import ResetButton from "@/components/house/ResetButton";
import { SearchModal } from "@/components/house/SearchModal";
import useQuery from "@/hooks/useQuery";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [searchCondition, setSearchCondition] = useState({});
  const [submittedCondition, setSubmittedCondition] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [numShowItems, numShowPages] = [24, 10];

  const arraySort = (arr: Array<number | string>) => {
    if (!arr?.length) return arr;
    if (arr.length == 0) return "";
    if (typeof arr[0] == "string") return arr.sort().join(",");
    return arr.sort((a: number, b: number) => a - b).join("");
  };

  const submit = () => {
    const sCondition = {
      q: searchCondition["q"],
      price_min: searchCondition["price"]?.[0],
      price_max: searchCondition["price"]?.[1],
      floor_area_min: searchCondition["floor_area"]?.[0],
      floor_area_max: searchCondition["floor_area"]?.[1],
      room_count: arraySort(searchCondition["room_count"]),
      toilet_count: arraySort(searchCondition["toilet_count"]),
      floor_count: arraySort(searchCondition["floor_count"]),
      warranty: searchCondition["warranty"],
      estimate_duration: searchCondition["estimate_duration"],
      frame: arraySort(searchCondition["frame"]),
      specificity: arraySort(searchCondition["specificity"]),
      model: searchCondition["model"] == 1 ? 1 : undefined,
    };

    for (const key in sCondition) {
      if (!sCondition.hasOwnProperty(key)) {
        delete sCondition[key];
      } else if (!sCondition[key] || sCondition[key].length == 0) {
        delete sCondition[key];
      }
    }

    setSubmittedCondition(sCondition);
    setIsSubmit(true);
  };

  return (
    <>
      <div style={{ width: "500px", fontSize: "38px", fontWeight: "600", margin: "120px 0" }}>
        우리 가족을 위한 집,
        <br />
        트러스에서 찾아보세요
      </div>
      {/*<div className="row" style={{display:"flex", justifyContent:"space-between", margin:"120px 0"}}>
          <div style={{width:"600px"}}>
            <div className="fs-5 fw-bold" style={{margin:"30px 0 10px 0"}}>조건에 맞는 집을 찾아드려요</div>
              <button
              style={{width:"150px", height:"50px", backgroundColor:"#314FC0", color:"white", border:"none", borderRadius:"40px"}}
              onClick={submit}>
                조건 검색하기
              </button>
            </div>
          </div>*/}
      <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="row" style={{ width: "1100px" }}>
          <div style={{ width: "380px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>검색바</div>
            <SearchBox name={"q"} data={searchCondition} setData={setSearchCondition} />
          </div>
          <div style={{ width: "290px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>방</div>
            <FillteringButton
              title={"1개"}
              value={1}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
            />
            <FillteringButton
              title={"2개"}
              value={2}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
            />
            <FillteringButton
              title={"3개"}
              value={3}
              name={"room_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
            />
          </div>
          <div style={{ width: "200px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>화장실</div>
            <FillteringButton
              title={"1개"}
              value={1}
              name={"toilet_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
            />
            <FillteringButton
              title={"2개"}
              value={2}
              name={"toilet_count"}
              type={"select"}
              data={searchCondition}
              setData={setSearchCondition}
            />
          </div>
          <div style={{ width: "120px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>상세검색 </div>
            <button
              style={{
                width: "80px",
                height: "40px",
                borderRadius: "10px",
                borderStyle: "solid",
                margin: "3px",
                backgroundColor: "white",
                borderWidth: "2px",
                borderColor: "gray",
              }}
              data-bs-toggle="modal"
              data-bs-target={`#search_modal`}
            >
              <div style={{ fontSize: "13px", fontWeight: "600" }}>필터링</div>
            </button>
            <SearchModal data={searchCondition} setData={setSearchCondition} />
          </div>
          <div style={{ width: "120px" }}>
            <div style={{ margin: "0 10px", fontWeight: "600" }}>상세검색 </div>
            <button
              type={"submit"}
              style={{
                width: "80px",
                height: "40px",
                borderRadius: "10px",
                borderStyle: "solid",
                margin: "3px",
                backgroundColor: "lightgray",
                borderWidth: "2px",
                borderColor: "gray",
              }}
              onClick={submit}
            >
              검색
            </button>
          </div>
        </div>
        <div style={{ width: "100px" }}>
          <div style={{ margin: "0 10px", fontWeight: "600" }}>초기화 </div>
          <ResetButton
            img={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/refresh.png"}
            value={1}
            setData={setSearchCondition}
          />
        </div>
      </div>

      {/*
      <div className="mt-5">
        <h5 className={`fw-bold`}>
          집을 지을 때 필요한 조건을 검색해보세요!
        </h5>
        <div className={`mb-3`}>
          <div className="d-flex flex-column px-0">
            <div className="my-2">
             
              <HouseSearchForm
                value={"keyword"} 
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit} />
            </div>

            <div className="row my-2 g-1">
            
              <HouseSelectForm
                className="col-3"
                title={"가격"}
                value={"price"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={5000}>5000만원 이하</option>
                <option value={10000}>5000만원 이상 ~ 1억원 이하</option>
                <option value={15000}>1억원 이상 ~ 1억 5000만원 이하</option>
                <option value={20000}>1억 5000만원 이상 ~ 2억원 이하</option>
                <option value={100000000}>2억원 이상</option>
              </HouseSelectForm>

            
              <HouseSelectForm
                className="col-3"
                title={"실평수"}
                value={"floorSpace"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={10}>10평 이하</option>
                <option value={20}>10평 이상 ~ 20평 이하</option>
                <option value={30}>20평 이상 ~ 30평 이하</option>
                <option value={10000}>30평 이상</option>
              </HouseSelectForm>

              
              <HouseSelectForm
                className="col-3"
                title={"건축면적"}
                value={"gunchuckSpace"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={20}>20㎡ 이하</option>
                <option value={30}>20㎡ 이상 ~ 30㎡ 이하</option>
                <option value={40}>30㎡ 이상 ~ 40㎡ 이하</option>
                <option value={50}>40㎡ 이상 ~ 50㎡ 이하</option>
                <option value={60}>50㎡ 이상 ~ 60㎡ 이하</option>
                <option value={10000}>60㎡ 이상</option>
              </HouseSelectForm>
            </div>

            <div className="row my-2 g-1">
              
              <HouseSelectForm
                className="col-3"
                title={"방"}
                value={"roomNumber"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={1}>1개</option>
                <option value={2}>2개</option>
                <option value={3}>3개</option>
                <option value={1000}>4개 이상</option>
              </HouseSelectForm>

              
              <HouseSelectForm
                className="col-3"
                title={"화장실"}
                value={"toiletNumber"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={1}>1개</option>
                <option value={2}>2개</option>
                <option value={3}>3개</option>
                <option value={1000}>4개 이상</option>
              </HouseSelectForm>

              
              <HouseSelectForm
                className="col-3"
                title={"소요기간"}
                value={"duration"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={1}>1개월 이하</option>
                <option value={2}>1개월 이상 ~ 2개월 이하</option>
                <option value={3}>2개월 이상 ~ 3개월 이하</option>
                <option value={4}>3개월 이상 ~ 4개월 이하</option>
                <option value={5}>4개월 이상 ~ 5개월 이하</option>
                <option value={10000}>5개월 이상</option>
              </HouseSelectForm>

              
              <HouseSelectForm
                className="col-3"
                title={"as기간"}
                value={"afterService"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={1}>1개월 이하</option>
                <option value={2}>1개월 이상 ~ 2개월 이하</option>
                <option value={3}>2개월 이상 ~ 3개월 이하</option>
                <option value={4}>3개월 이상 ~ 4개월 이하</option>
                <option value={5}>4개월 이상 ~ 5개월 이하</option>
                <option value={10000}>5개월 이상</option>
              </HouseSelectForm>
            </div>
          </div>
        </div>
      </div>
  */}

      <PostMenu title={"검색 결과입니다."}>
        <HouseList
          numShowItems={numShowItems}
          numShowPages={numShowPages}
          searchCondition={submittedCondition}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
      </PostMenu>
    </>
  );
}
