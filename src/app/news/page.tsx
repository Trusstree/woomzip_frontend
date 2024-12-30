import PostMenu from '@/components/posts/PostMenu';
import PostList from '@/app/news/_components/PostList';
import SearchComponent from '@/components/SearchComponent';
import Category from '@/app/news/_components/Category';
import { loadPostData } from '@/app/news/_actions/actions';
import LoadPage from '@/components/app/LoadPage';

export const revalidate = 1;

export default async function Page({ searchParams }) {
  const [numShowItems, numShowPages] = [24, 10];

  const [postData, postCount] = await loadPostData({ searchParams, numShowItems });

  return postData ? (
    <div>
      <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 뉴스</div>
        <hr style={{ borderColor: '#777777' }} />
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
          <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
            <PostList
              postData={postData}
              postCount={postCount}
              numShowItems={numShowItems}
              numShowPages={numShowPages}
            />
          </div>
        </PostMenu>
      </div>
    </div>
  ) : (
    <LoadPage />
  );
}
