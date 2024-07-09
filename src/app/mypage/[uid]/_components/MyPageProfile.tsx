import SignoutButton from "@/app/mypage/[uid]/_components/SignoutButton";
import { getUserdataByToken } from "@/lib/parseUtil";
import { cookies } from "next/headers";

export default function MyPageProfile({ uid, userData }) {
  const cookieStorge = cookies();
  const accessToken = cookieStorge.get("accessToken")?.value;
  const isSigned = accessToken && Number(uid) == getUserdataByToken(accessToken)?.uid;

  return (
    <div className="card sticky-top" style={{ width: "90%", border: "none", zIndex: 1 }}>
      <div className="container" style={{ height: "60px" }}></div>
      <div style={{ padding: "10px", boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
        <div className="row" style={{ width: "100%" }}>
          <div style={{ width: "90px" }}>
            <img
              className={"m-0 align-self-center"}
              src={userData["user_img_url"]}
              alt={`profile`}
              width={100}
              height={70}
              style={{ objectFit: "cover", borderRadius: "90px", width: "70px", height: "70px" }}
            />
          </div>
          <div style={{ fontSize: "24px", fontWeight: "600", margin: "20px 0", width: "auto" }}>
            {userData?.["nickname"]}
          </div>
        </div>
        <div style={{ width: "100%", margin: "30px 0", fontSize: "16px" }}>{userData?.one_line_introduce}</div>
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
          <div className="col-9">{userData?.phone_number}</div>
        </div>
        <div className="row">
          <div className="col-3" style={{ fontWeight: "600" }}>
            홈페이지
          </div>
          <div className="col-9">{userData?.company_url}</div>
        </div>
        <div className="row">
          <div className="col-3" style={{ fontWeight: "600" }}>
            유튜브
          </div>
          <div className="col-9">{userData?.pr_url}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          {isSigned && (
            // <Link style={{}} href={`${uid}?tab=profile`}>
            //   <span className="" style={{ wordBreak: "keep-all" }}>
            //     프로필 수정
            //   </span>
            // </Link>
            <SignoutButton />
          )}
        </div>
      </div>
    </div>
  );
}
