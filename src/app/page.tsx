import PostMenu from '@/components/posts/PostMenu';
import Carousel from '@/app/_components/Carousel';
import LivingCardList from '@/components/living/LivingCardList';
import PostList from '@/app/_components/PostList';
import HouseList from '@/app/_components/HouseList';
import { loadHouseData, loadPostData } from '@/app/_actions/actions';

export default async function Home() {
  const postData = await loadPostData();
  const semoHouseData = await loadHouseData({ tag: '경사지붕' });
  const nongchonHouseData = await loadHouseData({ has_model: 1 });

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
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'전원생활 고민을 나눠보세요!'}
            routeUrl={'/community'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>{postData ?? <PostList postData={postData} />}</div>
          </PostMenu>
        </div>
      </div>

      {/* 농막 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu title={'세모지붕 주택을 찾아요'} routeUrl={'/house'} routeText={'더보기'} horizontalScroll={true}>
            <div style={{ width: '100%', overflow: 'hidden' }}>
              {semoHouseData ?? <HouseList houseData={semoHouseData} />}
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
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'농촌 체류형 쉼터를 원해요.'}
            routeUrl={'/house'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>
              {nongchonHouseData ?? <HouseList houseData={nongchonHouseData} />}
            </div>
          </PostMenu>
        </div>
      </div>
    </>
  );
}
