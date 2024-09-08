import TooltipPortal from '@/components/TooltipPortal';
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

export default function withTooltipPortal<P extends IntrinsicAttributes>(TooltipComponent: React.ComponentType<P>) {
  const Component = (props: P) => {
    return (
      <TooltipPortal>
        <TooltipComponent {...props} />
      </TooltipPortal>
    );
  };

  return Component;
}
