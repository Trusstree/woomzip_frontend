import QnaPostCard from '@/app/_components/QnaPostCard';

export default function QnaPostList({ postData }) {
  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {postData.slice(0, 10).map((e: any, i: number) => (
        <QnaPostCard data={e} key={i} className="col-5 col-md-2" />
      ))}
    </div>
  );
}
