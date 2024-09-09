import 'react-tooltip/dist/react-tooltip.css';
import withTooltipPortal from '@/components/withTooltipPortal';
import { Tooltip } from 'react-tooltip';
import QuestionSVG from '@/components/svg/QuestionSVG';

const PortalTooltip = withTooltipPortal(Tooltip);

export default function RowText({ name, data, explain }: { name: string; data: string; explain?: JSX.Element }) {
  return (
    <div className="row g-1" style={{ margin: '5px 0' }}>
      <div className="col-3" style={{ fontSize: '15px', fontWeight: '500' }}>
        {name}
        {explain && (
          <span className="ms-2" data-tooltip-id={`tooltip_${name}`}>
            <QuestionSVG width={20} />
          </span>
        )}
      </div>
      <PortalTooltip id={`tooltip_${name}`} place={'right'} style={{ backgroundColor: '#314FC0' }}>
        {explain}
      </PortalTooltip>
      <div className="col-9" style={{ fontSize: '15px', fontWeight: '330' }}>
        {data}
      </div>
    </div>
  );
}
