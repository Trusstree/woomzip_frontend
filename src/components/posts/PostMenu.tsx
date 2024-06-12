import { Children } from "@/types/props";
import RouteButton from "../RouteButton";

type PostMenuProps = {
  title: string
  children: Children
  routeUrl?: string
  routeText?: string
  horizontalScroll?: boolean
}

export default function PostMenu(props: PostMenuProps) {
  const { title, children, routeUrl, routeText, horizontalScroll } = props;

  return (
    <div className="mt-5 mb-4">
      <div className="d-flex justify-content-between mt-2 mb-1">
        <h5 style={{fontWeight:"600"}}>{title}</h5>
        {(routeText&&routeUrl)?(
        <RouteButton url={routeUrl}>
          {routeText}
        </RouteButton>)
        :undefined}
      </div>
      <div className={`w-100 row g-2 mb-2 ${horizontalScroll?"flex-nowrap overflow-auto":""}`}>
        {children}
      </div>
    </div>
  );
}