import CategoryButton from '@/app/product/_components/CategoryButton';

export default function Category() {
  return (
    <div className="col-md-6 col-12 g-0">
      <div
        className="row w-100 flex-nowrap overflow-auto"
        style={{
          margin: '10px 0',
          padding: '10px 0',
        }}
      >
        <CategoryButton title={'전체'} imgSrc={'/buttonIcons/all.png'} queryName={'category'} />
        {/* <CategoryButton title={'일반'} imgSrc={'/buttonIcons/free.png'} queryName={'category'} category={'일반'} />
        <CategoryButton title={'질문'} imgSrc={'/buttonIcons/qna.png'} queryName={'category'} category={'질문'} /> */}
        <CategoryButton title={'칼럼'} imgSrc={'/buttonIcons/column.png'} queryName={'category'} category={'칼럼'} />
        <CategoryButton title={'공지'} imgSrc={'/buttonIcons/announce.png'} queryName={'category'} category={'공지'} />
      </div>
    </div>
  );
}
