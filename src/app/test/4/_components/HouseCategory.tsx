import CategoryButton from '@/app/test/4/_components/CategoryButton';

export default function HouseCategory() {
  return (
    <div
      style={{
        margin: '10px 0',
        // backgroundColor: '#F8F8FA',
        borderRadius: '10px',
        padding: '5px',
        overflow: 'hidden',
      }}
    >
      <div className="row" style={{ width: '2000px', marginLeft: '2px' }}>
        <CategoryButton title={'전체'} imgSrc={'/buttonIcons/all1.png'} queryName={'tag'} />
        <CategoryButton title={'농막'} imgSrc={'/buttonIcons/nongmak.png'} queryName={'tag'} category={'농막'} />
        <CategoryButton
          title={'체류형쉼터'}
          imgSrc={'/buttonIcons/farmvisit.png'}
          queryName={'tag'}
          category={'체류형쉼터'}
        />
        <CategoryButton title={'가성비'} imgSrc={'/buttonIcons/scale.png'} queryName={'tag'} category={'가성비'} />
        <CategoryButton
          title={'고급스러운'}
          imgSrc={'/buttonIcons/luxury.png'}
          queryName={'tag'}
          category={'고급스러운'}
        />
        <CategoryButton title={'특이한'} imgSrc={'/buttonIcons/unique.png'} queryName={'tag'} category={'특이한'} />
        <CategoryButton title={'한옥'} imgSrc={'/buttonIcons/hanok.png'} queryName={'tag'} category={'한옥'} />
        <CategoryButton title={'찜질방'} imgSrc={'/buttonIcons/sauna.png'} queryName={'tag'} category={'찜질방'} />
        <CategoryButton
          title={'세모지붕'}
          imgSrc={'/buttonIcons/triangleloop.png'}
          queryName={'tag'}
          category={'세모지붕'}
        />
        <CategoryButton title={'평지붕'} imgSrc={'/buttonIcons/flatloop.png'} queryName={'tag'} category={'평지붕'} />
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
    </div>
  );
}
