import RouteButton from '@/components/RouteButton';
import { Children } from '@/types/props';

type PostMenuProps = {
  title?: string;
  children: Children;
  routeUrl?: string;
  routeText?: string;
  horizontalScroll?: boolean;
};

export default function PostMenu(props: PostMenuProps) {
  const { title, children, routeUrl, routeText, horizontalScroll } = props;

  return (
    <div>
      <div className="d-flex justify-content-between mt-2 mb-1">
        <h5 style={{ fontSize: '20px', fontWeight: '700' }}>{title ?? ''}</h5>
        {routeText && routeUrl && (
          <RouteButton style={{ border: 'none', fontSize: '15px', color: '#314FC0' }} url={routeUrl}>
            {routeText}
          </RouteButton>
        )}
      </div>
      <div
        className={`w-100 row ${horizontalScroll ? 'flex-nowrap overflow-auto' : ''}`}
        style={{ margin: '0', padding: '0' }}
      >
        {children}
      </div>
    </div>
  );
}
