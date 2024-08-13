import { cardCountText } from '@/lib/stringUtil';
import HeartComponent from './HeartComponent';
import { getPostHeartUser, postPostHeart, postPostHeartRemove } from '@/actions/apis/heartAPI';

export default function Count({ pid, viewCount, commentCount, likeCount }) {
  return (
    <div className="row" style={{ width: 'auto' }}>
      {/* <div className="d-flex" style={{ width: "60px", padding: "0" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          width={25}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div className="ps-1" style={{ width: "34px" }}>
          {cardCountText(viewCount)}
        </div> 
      </div>*/}
      <div className="d-flex" style={{ width: '60px', padding: '0' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          width={25}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
        <div className="ps-1" style={{ width: '34px' }}>
          {commentCount ? cardCountText(commentCount) : 0}
        </div>
      </div>
      <HeartComponent
        heart_id={pid}
        likeCount={likeCount}
        getHeart={getPostHeartUser}
        postHeart={postPostHeart}
        postHeartRemove={postPostHeartRemove}
        type={'thumb'}
      />
    </div>
  );
}
