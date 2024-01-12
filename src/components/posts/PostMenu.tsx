import { Children } from "@/types/props";
import RouteButton from "../RouteButton";

type PostMenuProps = {
  title: string
  children: Children
  routeUrl?: string
  routeText?: string
}

export default function PostMenu(props: PostMenuProps) {
  const { title, children, routeUrl, routeText } = props;

  return (
    <div className="my-4 fw-bold fs-5">
      <div className="d-flex justify-content-between my-2 fs-5">
        <div>{title}</div>
        {(routeText&&routeUrl)?(
        <RouteButton url={routeUrl}>
          {routeText}
        </RouteButton>)
        :undefined}
      </div>
      <div className="row g-4 my-2">
        {children}
      </div>
    </div>
  );
}