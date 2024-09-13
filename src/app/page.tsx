import PostMenu from '@/components/posts/PostMenu';
import MainCarousel from '@/app/_components/MainCarousel';
import SubCarousel from '@/app/_components/SubCarousel';
import QnaPostList from '@/app/_components/QnaPostList';
import HouseList from '@/app/_components/HouseList';
import { loadHouseData, loadPostData } from '@/app/_actions/actions';
import ColumnPostList from '@/app/_components/ColumnPostList';
import VisitPostList from '@/app/_components/VisitPostList';

export const fetchCache = 'force-no-store';
export const revalidate = 1;

export default async function Home() {
  const visitPostData = await loadPostData({ category: '집들이' });
  const QnAPostData = await loadPostData({ category: '질문' });
  const NormalPostData = await loadPostData({ category: '일반' });
  const ColumnPostData = await loadPostData({ category: '칼럼' });
  const AnnouncePostData = await loadPostData({ category: '공지' });
  const semoHouseData = await loadHouseData({ tag: '세모지붕' });
  const nongchonHouseData = await loadHouseData({ tag: '체류형쉼터' });
  const luxuryHouseData = await loadHouseData({ tag: '고급스러운' });

  return (
    <>
      {/* <div>
        <Carousel className="w-100" />
      </div> */}

      <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className="row" style={{ marginTop: '20px' }}>
          <MainCarousel />
          <SubCarousel />
        </div>
      </div>

      {/* 체류형 쉼터 */}
      <div
        style={{
          width: '100%',
          padding: '60px 0 20px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'요즘 핫한 농촌 체류형쉼터🔥'}
            routeUrl={'/house?tag=체류형쉼터'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {semoHouseData && <HouseList houseData={nongchonHouseData} />}
            </div>
          </PostMenu>
        </div>
      </div>

      {/* 일반, 질문 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0 20px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'전원생활 고민을 나눠보세요!🏕️'}
            routeUrl={'/community?category=일반'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {QnAPostData && NormalPostData && <QnaPostList postData={[...QnAPostData, ...NormalPostData]} />}
            </div>
          </PostMenu>
        </div>
      </div>

      {/* 칼럼 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0 20px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'필수 건축정보를 알려드려요!📚'}
            routeUrl={'/community?category=칼럼'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {ColumnPostData && <ColumnPostList postData={ColumnPostData} />}
            </div>
          </PostMenu>
        </div>
      </div>

      {/*집들이*/}
      <div
        style={{
          width: '100%',
          padding: '30px 0 20px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'집들이 구경하고 가세요!🏡'}
            routeUrl={'/community?category=집들이'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {visitPostData && <VisitPostList postData={visitPostData} />}
            </div>
          </PostMenu>
        </div>
      </div>

      {/* 체류형 쉼터 */}
      <div
        style={{
          width: '100%',
          padding: '30px 0 60px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'고급스러운 모듈러 주택은?💎'}
            routeUrl={'/house?tag=고급스러운'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {semoHouseData && <HouseList houseData={luxuryHouseData} />}
            </div>
          </PostMenu>
        </div>
      </div>

      {/* 공지 */}
      {/* <div
        style={{
          width: '100%',
          padding: '40px 0 50px 0',
        }}
      >
        <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
          <PostMenu
            title={'움집 소식을 확인해보세요!'}
            routeUrl={'/community?category=공지'}
            routeText={'더보기'}
            horizontalScroll={true}
          >
            <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
              {ColumnPostData && <ColumnPostList postData={AnnouncePostData} />}
            </div>
          </PostMenu>
        </div>
      </div> */}
    </>
  );
}
