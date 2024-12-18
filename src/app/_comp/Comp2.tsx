export default function Comp2({id}:{id:string}){
  return (
    <div
      id={id}
      style={{
        backgroundColor: 'black',
        width: '100%',
        aspectRatio: '32 / 17',
        minHeight: '600px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(35px, 6vw, 55px)',
          fontWeight: '600',
          wordBreak: 'keep-all',
          width: '95%',
          margin: '50px auto',
          color: '#ffffff',
        }}
      >
        어떤 집을 지어야 할지,
        <br />
        제작사를 믿을 수 있을지,
        <br />
        내 예산안에 가능할지 고민하시나요?
        <br />
        <br />그 모든 걱정, 움집에선 필요 없어요.
      </div>
    </div>
  );
}