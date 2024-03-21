import MypageClient from "./MypageClient";

type PageParams = {
  id: string
}

export default function Mypage( {params} : {params: PageParams} ) {
  const { id } = params;
  
  return (
    <MypageClient id={id} />
  );
}