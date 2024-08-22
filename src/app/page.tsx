import PostMenu from '@/components/posts/PostMenu';
import Carousel from '@/app/_components/Carousel';
import MainCarousel from '@/app/_components/MainCarousel';
import SubCarousel from '@/app/_components/SubCarousel';
import PostList from '@/app/_components/PostList';
import HouseList from '@/app/_components/HouseList';
import { loadHouseData, loadPostData } from '@/app/_actions/actions';
import Image from 'next/image';
import { relative } from 'path';

export default async function Home() {
  const postData = await loadPostData();
  const semoHouseData = await loadHouseData({ tag: '세모지붕' });
  const nongchonHouseData = await loadHouseData({ tag: '체류형쉼터' });
  const nongmakHouseData = await loadHouseData({ tag: '농막' });
  const luxuryHouseData = await loadHouseData({ tag: '고급스러운' });

  return (
    <>
      {/* <div>
        <Carousel className="w-100" />
      </div> */}

      <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className="row">
          <MainCarousel></MainCarousel>
          <SubCarousel></SubCarousel>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '30px 0 20px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'전원생활 고민을 나눠보세요!'}
            routeUrl={'/community'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>{postData && <PostList postData={postData} />}</div>
          </PostMenu>
        </div>
      </div>

      {/* 체류형 쉼터 */}
      <div
        style={{
          width: '100%',
          padding: '20px 0',
          backgroundColor: '#FAFBFC',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'농촌 체류형 쉼터는 움집에서!'}
            routeUrl={'/house?tag=체류형쉼터'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden' }}>
              {semoHouseData && <HouseList houseData={nongchonHouseData} />}
            </div>
          </PostMenu>
        </div>
      </div>
    </>
  );
}
