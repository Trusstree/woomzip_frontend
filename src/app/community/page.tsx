import PostMenu from '@/components/posts/PostMenu';
import PostList from '@/app/community/_components/PostList';
import SearchComponent from '@/components/SearchComponent';
import Category from '@/app/community/_components/Category';
import styles from '@/styles/Phrase.module.css';
import { loadPostData } from '@/app/community/_actions/actions';
import LoadPage from '@/components/app/LoadPage';

export default async function Page({ searchParams }) {
  const [numShowItems, numShowPages] = [24, 10];

  const [postData, postCount] = await loadPostData({ searchParams, numShowItems });

  return postData ? (
    <div>
      <div style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className={styles.mainPhrase}>
          <span style={{ color: '#314FC0' }}>움집</span>에서 당신의 이야기를 들려주세요
        </div>
        <div
          className="row"
          style={{
            width: '100%',
            marginLeft: '0',
            overflow: 'hidden',
            padding: '0',
            position: 'relative',
            paddingBottom: '6px',
          }}
        >
          <Category />
          <SearchComponent />
        </div>

        <PostMenu routeUrl={'/community/write'} routeText={'글쓰기'}>
          <PostList postData={postData} postCount={postCount} numShowItems={numShowItems} numShowPages={numShowPages} />
        </PostMenu>
      </div>
    </div>
  ) : (
    <LoadPage />
  );
}
