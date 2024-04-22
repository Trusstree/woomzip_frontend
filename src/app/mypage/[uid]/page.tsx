import MypageClient from "./MypageClient";

type PageParams = {
  uid: string
}

export default function Mypage( {params} : {params: PageParams} ) {
  const { uid } = params;
  
  return (
    <MypageClient uid={uid} />
  );
}