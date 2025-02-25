export default function LoadPage() {
  return (
    <div
      className="d-flex text-center flex-column justify-content-center container text-center my-5 d-flex flex-column"
      style={{ minHeight: '100vh' }}
    >
      <h1 className="my-5">
        <span className="spinner-border " style={{ width: '3.5rem', height: '3.5rem' }} role="status" /> 로딩 중...
      </h1>
    </div>
  );
}
