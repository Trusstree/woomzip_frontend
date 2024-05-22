import RouteButton from "@/components/RouteButton";
import SigninButton from "@/components/auth/SigninButton";
import React from "react";
import Image from "next/image";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <div
      className={`navbar navbar-expand-md`}
      style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        backgroundColor: "white",
      }}
    >
      <div className="d-flex justify-content-between w-100">
        <RouteButton url={"/"} className="ms-md-4 px-4 py-2">
          <Image src={"/logo/logo_truss.png"} alt={"Truss Logo"} width={60} height={40} />
        </RouteButton>

        <div className="d-flex d-md-none">
          <button
            className="me-3 btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                메뉴
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body d-flex flex-column">
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <SigninButton />
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/"} className="fs-5">
                  홈
                </RouteButton>
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/community"} className="align-self-start fs-5">
                  커뮤니티
                </RouteButton>
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/living"} className="fs-5">
                  살아보기
                </RouteButton>
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/house"} className="fs-5">
                  찾아보기
                </RouteButton>
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/planning"} className="fs-5">
                  계획하기
                </RouteButton>
              </div>
              <div data-bs-dismiss="offcanvas" aria-label="Close">
                <RouteButton url={"/test"} className="fs-5">
                  테스트용
                </RouteButton>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-md-flex w-100">
          <div className="d-flex align-items-center me-auto">
            <RouteButton url={"/"} className="fs-6">
              홈
            </RouteButton>

            <RouteButton url={"/community"} className="fs-6">
              커뮤니티
            </RouteButton>

            <RouteButton url={"/living"} className="fs-6">
              살아보기
            </RouteButton>

            <RouteButton url={"/house"} className="fs-6">
              찾아보기
            </RouteButton>

            <RouteButton url={"/planning"} className="fs-6">
              계획하기
            </RouteButton>

            <RouteButton url={"/test"} className="fs-5">
              테스트용
            </RouteButton>
          </div>

          <div className="d-flex align-items-center mx-5">
            <SigninButton />
            {/* <RouteButton url={"/service"}>
              기업서비스
            </RouteButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
