import { getUser } from "@/apis/userAPI";
import { ReviewInfo } from "@/components/house/ReviewInfo";
import { getUserdataByToken } from "@/lib/parseUtil";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import House from "./_components/House";
import ProfileImageBox from "./_components/ProfileImageBox";

async function create(uid: string | number) {
  "use server";

  const [data, error] = await getUser(uid);
  if (error) {
    console.log(error);
    console.log("user error");
    return;
  }
  return data?.data[0]?.user_profile;
}

export default async function Page({ params, searchParams }) {
  const { uid } = params;
  const { tab } = searchParams;

  const userData: any = await create(uid);
  const cookieStorge = cookies();
  const accessToken = cookieStorge.get("accessToken").value;
  const signedUID = accessToken && getUserdataByToken(accessToken)?.uid;

  return (
    <main>
      <div className="row" style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ width: "60%", marginTop: "20px", minWidth: "400px" }}>
          <div className="row">
            <Image
              style={{ objectFit: "cover", width: "88%", marginLeft: "0px" }}
              src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"}
              alt="main BoardComponent"
              width={500}
              height={530}
            />

            <div className="container" style={{ width: "12%" }}>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={0}
                    alt={`external_images_0`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={1}
                    alt={`external_images_1`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver3.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={0}
                    alt={`internal_images_0`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver4.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={1}
                    alt={`internal_images_1`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver5.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={1}
                    alt={`internal_images_2`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver6.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
              <div style={{ width: "80px", height: "80px", marginBottom: "10px", overflow: "hidden" }}>
                {
                  <img
                    key={0}
                    alt={`floor_plan_images_0`}
                    src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver7.jpeg"}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                }
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "40%", marginTop: "20px", minWidth: "400px" }}>
          <div className="card" style={{ width: "90%", marginLeft: "10%", border: "none" }}>
            <div className="row" style={{ width: "100%" }}>
              <div style={{ width: "90px" }}>
                <ProfileImageBox data={userData} name={"user_img_url"} />
              </div>
              <div style={{ fontSize: "24px", fontWeight: "600", margin: "15px 0", width: "auto" }}>
                {userData?.nickname}
              </div>
            </div>
            <div style={{ width: "100%", margin: "20px 0", fontSize: "16px" }}>
              {userData?.one_line_introduce} 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는
              이런 걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요
              소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런
              걸 잘해요 소개글 우리는 이런 걸 잘해요 소개글 우리는 이런 걸 잘해요
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: "600" }}>
                대표자명
              </div>
              <div className="col-9">{userData?.name}</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: "600" }}>
                주소
              </div>
              <div className="col-9">{userData?.addr}</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: "600" }}>
                전화번호
              </div>
              <div className="col-9">0507-1369-6158</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: "600" }}>
                홈페이지
              </div>
              <div className="col-9">www.woomzip.com</div>
            </div>
            <div className="row">
              <div className="col-3" style={{ fontWeight: "600" }}>
                유튜브
              </div>
              <div className="col-9">@buildintruss</div>
            </div>
            <div style={{ textAlign: "right" }}>
              {Number(uid) == signedUID && (
                <Link style={{}} href={`${uid}?tab=profile`}>
                  <span className="" style={{ wordBreak: "keep-all" }}>
                    프로필 수정
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <ReviewInfo />
        </div>

        <div className="d-flex justify-content-between" style={{ marginTop: "100px" }}>
          <h5>판매자 연관 칼럼</h5>
          <div className="btn" style={{ fontSize: "14px" }}>
            칼럼 작성하기
          </div>
        </div>

        <div className="d-flex justify-content-between" style={{ marginTop: "100px" }}>
          <h5>판매자 체험 숙소</h5>
          <div className="btn" style={{ fontSize: "14px" }}>
            더보기
          </div>
        </div>

        <House userData={userData} isYou={userData} />
      </div>
    </main>
    // <div className="mb-5 row">
    //   <div className="col-lg-3">
    //     <div
    //       className="rounded-2 mt-5 mb-3 p-4 d-flex justify-content-between flex-column"
    //       style={{ backgroundColor: "lightgray" }}
    //     >
    //       <ProfileImageBox data={userData} name={"user_img_url"} />
    //       <div className="my-3 d-flex flex-column align-items-center">
    //         <div className="fs-5 fw-bold">{userData?.nickname}</div>
    //         <div>{userData?.email}</div>
    //         <div>{userData?.one_line_introduce}</div>
    //       </div>

    //       {/* <div className="d-flex justify-content-between">
    //           <div>
    //             <svg className="me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={25}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    //             </svg>
    //             좋아요
    //           </div>
    //           <div>111</div>
    //         </div> */}
    //       {/*<div className="d-flex justify-content-between">
    //           <div>
    //             <svg className="me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={25}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    //             </svg>
    //             내가 쓴 글
    //           </div>
    //           <div>111</div>
    //         </div>
    //         <div className="d-flex justify-content-between">
    //           <div>
    //             <svg className="me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={25}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    //             </svg>
    //             내가 쓴 댓글
    //           </div>
    //           <div>111</div>
    //         </div> */}
    //     </div>

    //     {Number(uid) == signedUID && (
    //       <Link
    //         className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
    //         style={{ backgroundColor: "#101648" }}
    //         href={`${uid}?tab=profile`}
    //       >
    //         <span className="fs-5 fw-bold" style={{ wordBreak: "keep-all" }}>
    //           프로필 수정
    //         </span>
    //       </Link>
    //     )}

    //     {
    //       <Link
    //         className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
    //         style={{ backgroundColor: "#101648" }}
    //         href={`${uid}?tab=community`}
    //       >
    //         <span className="fs-5 fw-bold" style={{ wordBreak: "keep-all" }}>
    //           커뮤니티
    //         </span>
    //       </Link>
    //     }
    //     {!isNaN(Number(userData?.["role"])) && Number(userData?.["role"]) > 0 && (
    //       <Link
    //         className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
    //         style={{ backgroundColor: "#101648" }}
    //         href={`${uid}?tab=house`}
    //       >
    //         <span className="fs-5 fw-bold" style={{ wordBreak: "keep-all" }}>
    //           내 제품 정보
    //         </span>
    //       </Link>
    //     )}
    //   </div>
    //   <div className="col-lg-9">
    //     {tab == undefined && (
    //       <>
    //         <PostMenu title={"좋아요한 집을 보여드릴게요."}>
    //           <MyLikeHouseList numShowItems={12} searchCondition={undefined} />
    //         </PostMenu>
    //       </>
    //     )}
    //     {tab == "profile" && <Profile userData={userData} />}
    //     {tab == "community" && <Community userData={userData} />}
    //     {tab == "house" && <House userData={userData} isYou={Number(uid) == signedUID} />}
    //   </div>
    // </div>
  );
}
