export default function HouseImage({ title, name, imageData }: { title: string; name: string; imageData: string[] }) {
  return (
    <>
      <h5 className="fw-bold mb-4" style={{ color: "#101648" }}>
        {title}
      </h5>
      <div className="mb-4 d-flex flex-nowrap overflow-auto">
        {imageData[name] && imageData[name].map((e, i) => <img key={i} alt={`${name}_${i}`} src={e} height={500} />)}
      </div>
    </>
  );
}
