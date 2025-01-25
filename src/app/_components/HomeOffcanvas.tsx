import HomeOffcanvasRouteButton from '@/app/_components/HomeOffcanvasRouteButton';

export default function Offcanvas({ id }) {
  return (
    <div className="collapse offcanvas offcanvas-end" tabIndex={-1} id={id} aria-labelledby={`${id}_Label`}>
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id={`${id}_Label`}></h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column align-items-center me-auto">
          <HomeOffcanvasRouteButton url="/" style={{ fontSize: '25px', border: 'none' }}>
            홈
          </HomeOffcanvasRouteButton>

          <HomeOffcanvasRouteButton url="/product" style={{ fontSize: '25px', border: 'none' }}>
            제품찾기
          </HomeOffcanvasRouteButton>

          <HomeOffcanvasRouteButton url="/service" style={{ fontSize: '25px', border: 'none' }}>
            서비스소개
          </HomeOffcanvasRouteButton>

          <HomeOffcanvasRouteButton url="/about" style={{ fontSize: '25px', border: 'none' }}>
            회사소개
          </HomeOffcanvasRouteButton>

          <HomeOffcanvasRouteButton url="/news" style={{ fontSize: '25px', border: 'none' }}>
            뉴스
          </HomeOffcanvasRouteButton>
        </div>
        <div style={{ textAlign: 'right', marginTop: '30px', padding: '0', border: 'none' }}></div>
      </div>
    </div>
  );
}
