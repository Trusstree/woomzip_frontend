import OffcanvasRouteButton from '@/app/_components/OffcanvasRouteButton';
import OffcanvasSigninButton from '@/app/_components/OffcanvasSigninButton';

export default function Offcanvas({ id }) {
  return (
    <div className="collapse offcanvas offcanvas-end" tabIndex={-1} id={id} aria-labelledby={`${id}_Label`}>
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id={`${id}_Label`}>
          움집 메뉴
        </h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column align-items-center me-auto">
          <OffcanvasRouteButton url="/" style={{ fontSize: '30px', border: 'none' }}>
            홈
          </OffcanvasRouteButton>

          <OffcanvasRouteButton url="/community" style={{ fontSize: '30px', border: 'none' }}>
            커뮤니티
          </OffcanvasRouteButton>
          {/* <OffcanvasRouteButton url="/living" style={{ fontSize: "30px" }}>
              살아보기
            </OffcanvasRouteButton> */}
          <OffcanvasRouteButton url="/house" style={{ fontSize: '30px', border: 'none' }}>
            찾아보기
          </OffcanvasRouteButton>
          {/* <OffcanvasRouteButton url="/planning" style={{ fontSize: "30px" }}>
                계획하기
              </OffcanvasRouteButton> */}
        </div>
        <div style={{ textAlign: 'right', margin: '0', padding: '0', border: 'none' }}>
          <OffcanvasSigninButton data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
      </div>
    </div>
  );
}
