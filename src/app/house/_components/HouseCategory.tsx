import CategoryButton from '@/components/CategoryButton';

export default function HouseCategory() {
  return (
    <div className="row w-100 flex-nowrap overflow-auto" style={{ marginLeft: '0', height: '80px' }}>
      <CategoryButton title={'전체'} imgSrc={'/buttonIcons/all.png'} />
      <CategoryButton title={'농막'} imgSrc={'/buttonIcons/farmhouse.png'} category={'농막'} />
      <CategoryButton title={'체류형쉼터'} imgSrc={'/buttonIcons/farmvisit.png'} category={'체류형쉼터'} />
      <CategoryButton title={'컨테이너'} imgSrc={'/buttonIcons/container.png'} category={'컨테이너'} />
      <CategoryButton title={'가성비'} imgSrc={'/buttonIcons/money.png'} category={'가성비'} />
      <CategoryButton title={'고급스러운'} imgSrc={'/buttonIcons/luxury.png'} category={'고급스러운'} />
      <CategoryButton title={'세모지붕'} imgSrc={'/buttonIcons/triangleloop.png'} category={'세모지붕'} />
      <CategoryButton title={'평지붕'} imgSrc={'/buttonIcons/flatloop.png'} category={'평지붕'} />
      <CategoryButton title={'특이한'} imgSrc={'/buttonIcons/unique.png'} category={'특이한'} />
      {/* <CategoryButton
        title={"미국식"}
        imgSrc={
          "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
        }
        category={"미국식"}
      />
      <CategoryButton
        title={"유럽식"}
        imgSrc={
          "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
        }
        category={"유럽식"}
      />
      <CategoryButton
        title={"모던한"}
        imgSrc={
          "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
        }
        category={"모던한"}
      />
      <CategoryButton
        title={"아늑한"}
        imgSrc={
          "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
        }
        category={"아늑한"}
      />
      <CategoryButton
        title={"탁 트여있는"}
        imgSrc={
          "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"
        }
        category={"탁트여있는"}
      /> */}
    </div>
  );
}
