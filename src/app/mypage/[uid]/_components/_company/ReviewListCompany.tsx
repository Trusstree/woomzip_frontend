import ReviewCard from '@/app/mypage/[uid]/_components/_company/ReviewCardCompany';
import RouteButton from '@/components/RouteButton';

export default function ReviewListCompany({
  uid,
  review,
  rating,
  url,
}: {
  uid: any;
  review: Array<any>;
  rating: number;
  url?: string;
}) {
  return (
    <div style={{ marginTop: '20px', width: '100%' }}>
      <div className="d-flex justify-content-between" style={{ margin: '30px 0 10px 0' }}>
        <h5>
          후기({review.length}) ★ {rating ? rating.toFixed(1) : 0}
        </h5>
        {url && <RouteButton url={url}>전체보기</RouteButton>}
      </div>
      <div className="row flex-nowrap overflow-auto g-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {review?.map((e, i) => (
          <ReviewCard
            uid={uid}
            key={e['id']}
            id={e['id']}
            nickname={e['nickname']}
            date={e['updated_at'] ? e['updated_at'] : e['created_at']}
            rating={e['rating']}
            tag={e['tag']}
            comment={e['comment']}
            images={e['images']}
          />
        ))}
      </div>
    </div>
  );
}
