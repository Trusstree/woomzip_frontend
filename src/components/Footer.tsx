import GuideLine from "@/components/GuideLine";
import RouteButton from "@/components/RouteButton";
import React from "react";

type FooterProps = {
  page:string
  url:string
};

export default function Footer(props: FooterProps) {
  const { page, url } = props;

  return (
    <nav className="row w-100 my-5">
      <div className="col-7 px-5 mt-4"><GuideLine page={page}></GuideLine></div>
      <div className="col-2"></div>
      <div className="col-3"><RouteButton url={url} className="px-5 mx-auto align-self-left">다음 단계로 이동하기</RouteButton></div>
    </nav>
  );
}