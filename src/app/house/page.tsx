import { loadHouseData } from '@/app/house/_actions/actions';
import BadgeList from '@/app/house/_components/BadgeList';
import HouseCategory from '@/app/house/_components/HouseCategory';
import { SearchModal } from '@/app/house/_components/SearchModal';
import HouseList from '@/app/house/_components/HouseList';
import PostMenu from '@/components/posts/PostMenu';
import styles from '@/styles/Phrase.module.css';
import LoadPage from '@/components/app/LoadPage';
import Carousel from '@/app/_components/Carousel';
import Image from 'next/image';

export default async function Home({ searchParams }) {
  const [numShowItems, numShowPages] = [24, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);
  return houseData ? (
    <>
      <Carousel />

      <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className={styles.mainPhrase}>
          <span style={{ color: '#314FC0' }}>움집</span>에서 가장 쉽고 빠른 집 찾기
        </div>

        <div
          className="container"
          style={{
            width: '100%',
            marginLeft: '0',
            overflow: 'hidden',
            paddingBottom: '6px',
            position: 'relative',
          }}
        >
          <HouseCategory />
          <div
            className="btn"
            style={{
              width: 'auto',
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'white',
              borderLeft: '2px solid gray',
              borderRadius: '0',
              padding: '0 0 0 10px',
            }}
            data-bs-toggle="modal"
            data-bs-target={`#search_modal`}
          >
            <div style={{ width: '28px', height: '28px' }}>
              <Image src={'/buttonIcons/fillter.png'} alt={'filter'} width={28} height={28} />
            </div>
            <div style={{ fontSize: '15px' }}>필터</div>
          </div>
        </div>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <BadgeList />
        </div>
        <SearchModal />

        <PostMenu>
          <HouseList houseData={houseData} count={houseCount} numShowItems={numShowItems} numShowPages={numShowPages} />
        </PostMenu>
      </div>
    </>
  ) : (
    <LoadPage />
  );
}
