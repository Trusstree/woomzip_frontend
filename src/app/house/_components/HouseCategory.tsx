import CategoryButton from "@/components/CategoryButton";

export default function HouseCategory() {
  return (
    <div className="row w-100 flex-nowrap overflow-auto" style={{ marginLeft: "0", height: "80px" }}>
      <CategoryButton title={"전체"} imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"} />
      <CategoryButton
        title={"주택"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"주택"}
      />
      <CategoryButton
        title={"세컨하우스"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"세컨하우스"}
      />
      <CategoryButton
        title={"농막"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"농막"}
      />
      <CategoryButton
        title={"부모님과"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"부모님과"}
      />
      <CategoryButton
        title={"아이들과"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"아이들과"}
      />
      <CategoryButton
        title={"가성비"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"가성비"}
      />
      <CategoryButton
        title={"고급스러운"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"고급스러운"}
      />
      <CategoryButton
        title={"특이한"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"특이한"}
      />
      <CategoryButton
        title={"미국식"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"미국식"}
      />
      <CategoryButton
        title={"유럽식"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"유럽식"}
      />
      <CategoryButton
        title={"모던한"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"모던한"}
      />
      <CategoryButton
        title={"아늑한"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"아늑한"}
      />
      <CategoryButton
        title={"탁 트여있는"}
        imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
        category={"탁트여있는"}
      />
    </div>
  );
}
