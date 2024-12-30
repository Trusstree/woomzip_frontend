import OffcanvasRouteButton from '@/app/_components/OffcanvasRouteButton';
import OffcanvasSigninButton from '@/app/_components/OffcanvasSigninButton';

export default function Offcanvas({ id }) {
  return (
    <div className="collapse offcanvas offcanvas-end" tabIndex={-1} id={id} aria-labelledby={`${id}_Label`}>
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id={`${id}_Label`}></h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column align-items-center me-auto">
          <OffcanvasRouteButton url="/" style={{ fontSize: '25px', border: 'none' }}>
            홈
          </OffcanvasRouteButton>

          <OffcanvasRouteButton url="/house" style={{ fontSize: '25px', border: 'none' }}>
            제품찾기
          </OffcanvasRouteButton>

          <OffcanvasRouteButton url="/service" style={{ fontSize: '25px', border: 'none' }}>
            서비스소개
          </OffcanvasRouteButton>

          <OffcanvasRouteButton url="/about" style={{ fontSize: '25px', border: 'none' }}>
            회사소개
          </OffcanvasRouteButton>

          <OffcanvasRouteButton url="/news" style={{ fontSize: '25px', border: 'none' }}>
            뉴스
          </OffcanvasRouteButton>
        </div>
        <div style={{ textAlign: 'right', marginTop: '30px', padding: '0', border: 'none' }}>
          <OffcanvasSigninButton data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
      </div>
    </div>
  );
}
