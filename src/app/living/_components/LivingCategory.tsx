import CategoryButton from "@/components/CategoryButton";
import styles from "@/styles/Category.module.css";

export default function LivingCategory() {
  return (
    <div className={styles.categoryContainer}>
      <div className={`row ${styles.categoryRow}`}>
        <CategoryButton
          title={"전체"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
          }
        />
        <CategoryButton
          title={"숙소"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/pavilion.png"
          }
          category={"숙소"}
        />
        <CategoryButton
          title={"투어"}
          imgSrc={
            "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/tour.png"
          }
          category={"투어"}
        />
      </div>
    </div>
  );
}
