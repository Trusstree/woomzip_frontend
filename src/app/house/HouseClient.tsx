"use client"

import PostMenu from "@/components/posts/PostMenu";
import { HouseList } from "@/components/house/HouseList";
import { useState } from "react";
import HouseSearchForm from "@/components/house/HouseSearchForm";
import HouseSelectForm from "@/components/house/HouseSelectForm";

export default function Home() {
  const [searchCondition, setSearchCondition]=useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <>
      <div className="mt-5">
        <h5 className={`fw-bold`}>
          집을 지을 때 필요한 조건을 검색해보세요!
        </h5>
        <div className={`mb-3`}>
          <div className="d-flex flex-column px-0">
            <div className="my-2">
              {/* search */}
              <HouseSearchForm
                value={"keyword"} 
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit} />
            </div>

            <div className="row my-2 g-1">
              {/* price */}
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

              {/* floorSpace */}
              <HouseSelectForm
                className="col-3"
                title={"실평수"}
                value={"floorSpace"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={20}>20평 이하</option>
                <option value={30}>20평 이상 ~ 30평 이하</option>
                <option value={40}>30평 이상 ~ 40평 이하</option>
                <option value={50}>40평 이상 ~ 50평 이하</option>
                <option value={60}>50평 이상 ~ 60평 이하</option>
                <option value={70}>60평 이상 ~ 70평 이하</option>
                <option value={10000}>70평 이상</option>
              </HouseSelectForm>

              {/* gunchuckSpace */}
              <HouseSelectForm
                className="col-3"
                title={"건축평수"}
                value={"gunchuckSpace"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={20}>20평 이하</option>
                <option value={30}>20평 이상 ~ 30평 이하</option>
                <option value={40}>30평 이상 ~ 40평 이하</option>
                <option value={50}>40평 이상 ~ 50평 이하</option>
                <option value={60}>50평 이상 ~ 60평 이하</option>
                <option value={70}>60평 이상 ~ 70평 이하</option>
                <option value={10000}>70평 이상</option>
              </HouseSelectForm>
            </div>
            <div className="row my-2 g-1">
              {/* roomNumber */}
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
                <option value={4}>4개</option>
                <option value={5}>5개</option>
                <option value={1000}>6개 이상</option>
              </HouseSelectForm>

              {/* toiletNumber */}
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

              {/* duration */}
              <HouseSelectForm
                className="col-3"
                title={"소요기간"}
                value={"duration"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={12}>12개월 이하</option>
                <option value={24}>12개월 이상 ~ 24개월 이하</option>
                <option value={36}>24개월 이상 ~ 36개월 이하</option>
                <option value={48}>36개월 이상 ~ 48개월 이하</option>
                <option value={60}>48개월 이상 ~ 60개월 이하</option>
                <option value={10000}>60개월 이상</option>
              </HouseSelectForm>

              {/* afterService */}
              <HouseSelectForm
                className="col-3"
                title={"as기간"}
                value={"afterService"}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                setIsSubmit={setIsSubmit}>
                <option value={-1}>선택 안 함</option>
                <option value={12}>12개월 이하</option>
                <option value={24}>12개월 이상 ~ 24개월 이하</option>
                <option value={36}>24개월 이상 ~ 36개월 이하</option>
                <option value={48}>36개월 이상 ~ 48개월 이하</option>
                <option value={60}>48개월 이상 ~ 60개월 이하</option>
                <option value={10000}>60개월 이상</option>
              </HouseSelectForm>
            </div>
          </div>
        </div>
      </div>

      <PostMenu
        title={"내가 원하는 주택들을 검색하여 구경해보세요!"}>
        <HouseList
          numShowItems={numShowItems}
          numShowPages={numShowPages}
          searchCondition={searchCondition}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit} />
      </PostMenu>
    </>
  );
}