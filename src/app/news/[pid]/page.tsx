import DOMPurify from 'isomorphic-dompurify';
import { loadPostData } from '@/app/news/[pid]/_actions/actions';
import { elapsedTimeText } from '@/lib/stringUtil';

const style = {
  일반: { backgroundColor: '#CCD6FF', color: '#314FC0' },
  NEWS: { backgroundColor: '#FFCCCC', color: '#C03142' },
  질문: { backgroundColor: '#E2FFCC', cololr: '#8AC031' },
  칼럼: { backgroundColor: '#ECECF3', color: '#686875' },
  집들이: { backgroundColor: '#FFEAC7', color: '#D5A71E' },
};

export default async function page({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const postData = await loadPostData(pid);

  return (
    <div>
      <div
        className="row"
        style={{
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: style[postData.postType].backgroundColor,
              borderColor: style[postData.postType].backgroundColor,
              width: '60px',
              fontSize: '16px',
              color: style[postData.postType].color,
              borderRadius: '15px',
              padding: '3px 7px',
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            {postData.postType}
          </div>

          <h3 style={{ paddingTop: '30px' }}>{postData.title}</h3>

          <div className="row" style={{ marginTop: '20px' }}>
            {/* <div style={{ width: '50px', height: '40px' }}>
              <Image
                src={postData?.['user_img_url']}
                alt={'user image'}
                width={40}
                height={40}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  width: '35px',
                  height: '35px',
                }}
              />
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '400',
                width: 'auto',
                margin: '5px 0 0 0',
              }}
            >
              {postData['nickname']}
            </div> */}
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: '15px', color: 'gray', marginTop: '10px' }}
          >
            <div style={{ width: 'auto' }}>{elapsedTimeText(postData.createdDate)}</div>
          </div>
          <hr />

          <div
            style={{ width: '100%', minHeight: '500px', margin: '40px 0' }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(String(postData.postContent)),
            }}
          />
        </div>
        {/* <PostMenu title={'더 많은 글을 구경해보세요!'} routeUrl={'/news'} routeText={'더보기'} horizontalScroll={true}>
          <PostList postData={recommendPostData} />
        </PostMenu> */}
      </div>
    </div>
  );
}
