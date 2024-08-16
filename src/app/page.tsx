import PostMenu from '@/components/posts/PostMenu';
import Carousel from '@/app/_components/Carousel';
import LivingCardList from '@/components/living/LivingCardList';
import PostList from '@/app/_components/PostList';
import HouseList from '@/app/_components/HouseList';

export default async function Home() {
  return (
    <>
      <div>
        <Carousel className="w-100" />
      </div>

      <div
        style={{
          width: '100%',
          padding: '30px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
          <PostMenu
            title={'전원생활 고민을 나눠보세요!'}
            routeUrl={'/community'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <PostList numShowItems={10} />
            </div>
          </PostMenu>
        </div>
      </div>

      {/* <div
        style={{
          width: "100%",
          padding: "50px 0",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu title={"먼저 무료로 살아보세요"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
            <LivingCardList numShowItems={4} />
          </PostMenu>
        </div>
      </div> */}

      {/* 농막 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
          <PostMenu title={'세모지붕 주택을 찾아요'} routeUrl={'/house'} routeText={'더보기'} horizontalScroll={true}>
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <HouseList numShowItems={6} searchConditions={{ tag: '경사지붕' }} />
            </div>
          </PostMenu>
        </div>
      </div>

      {/* 농촌 체류형 쉼터 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
          <PostMenu
            title={'농촌 체류형 쉼터를 원해요.'}
            routeUrl={'/house'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>
              <HouseList numShowItems={6} searchConditions={{ model: 1 }} />
            </div>
          </PostMenu>
        </div>
      </div>
    </>
  );
}
