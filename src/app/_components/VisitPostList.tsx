import VisitPostCard from '@/app/_components/VisitPostCard';

export default async function PostList({ postData }) {
  return (
    <div className="row">
      {postData.slice(0, 3).map((e: any, i: number) => (
        <VisitPostCard data={e} key={i} className="col-12 col-md-4" />
      ))}
    </div>
  );
}
