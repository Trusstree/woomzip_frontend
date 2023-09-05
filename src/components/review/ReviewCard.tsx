import { Children } from "@/type/props";

type ReviewCardProps = {
  title?: string;
  children?: Children;
};

export default function ReviewCard(props: ReviewCardProps) {
  const { title, children } = props;

  return (
    <div className={`d-flex flex-column mt-4 pt-4`} style={{borderTopStyle:"solid", borderTopColor:"white", borderTopWidth:"2px"}}>
      <div>
        {children}
      </div>
    </div>
  );
}
