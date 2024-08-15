import CategoryButton from '@/components/CategoryButton';
import styles from '@/styles/Category.module.css';

export default function Category() {
  return (
    <div className="col-md-8 col-12">
      <div className={`row ${styles.categoryRow}`}>
        <CategoryButton title={'전체'} imgSrc={'/buttonIcons/all.png'} />
        <CategoryButton title={'일반'} imgSrc={'/buttonIcons/free.png'} category={'일반'} />
        <CategoryButton title={'질문'} imgSrc={'/buttonIcons/qna.png'} category={'질문'} />
        <CategoryButton title={'칼럼'} imgSrc={'/buttonIcons/column.png'} category={'칼럼'} />
        <CategoryButton title={'공지'} imgSrc={'/buttonIcons/announce.png'} category={'공지'} />
      </div>
    </div>
  );
}
