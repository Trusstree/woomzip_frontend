import CategoryButton from '@/app/house/_components/CategoryButton';

export default function HouseCategory({ categoryList }) {
  return (
    <div
      className="row w-100 flex-nowrap overflow-auto"
      style={{
        margin: '10px 0',
        padding: '10px 0',
      }}
    >
      {categoryList.map((e, i) => (
        <>
          <CategoryButton title={e.title} imgSrc={e.imgSrc} queryName={e.queryName} category={e.category} />
        </>
      ))}
    </div>
  );
}
