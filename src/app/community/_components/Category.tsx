import CategoryButton from "@/components/CategoryButton";
import styles from "@/styles/Category.module.css";

export default function Category() {
  return (
    <div className={styles.categoryContainer}>
      <div className={`row ${styles.categoryRow}`}>
        <CategoryButton
          title={"전체"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
          }
        />
        {/* <CategoryButton
          title={"베스트"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/best.png"
          }
          category={"베스트"}
        /> */}
        <CategoryButton
          title={"일반"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/free.png"
          }
          category={"일반"}
        />
        <CategoryButton
          title={"질문"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/qna.png"
          }
          category={"질문"}
        />
        <CategoryButton
          title={"칼럼"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/column.png"
          }
          category={"칼럼"}
        />
        <CategoryButton
          title={"공지"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/announce.png"
          }
          category={"공지"}
        />
      </div>
    </div>
  );
}
