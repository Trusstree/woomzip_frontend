import ColumnPostCard from '@/app/_components/ColumnPostCard';

export default function ColumnPostList({ postData }) {
  return (
    <div className="row">
      {postData.slice(0, 4).map((e: any, i: number) => (
        <ColumnPostCard data={e} key={i} className="col-6 col-md-3" />
      ))}
    </div>
  );
}
