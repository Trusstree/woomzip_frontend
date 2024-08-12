'use client';

import { useRouter } from 'next/navigation';
import useQuery from '@/hooks/useQuery';

export default function FillteringCheck({ title, type, value, name }) {
  const router = useRouter();
  const { createQuery, getParams, getRouteParams } = useQuery();

  const handleClick = () => {
    const _value = typeof value == 'number' ? value.toString() : value;
    if (type === 'select') {
      let newValue = getParams().get(name)?.split(',');
      if (!newValue) {
        newValue = [_value];
      } else if (newValue.includes(_value)) {
        const ind = newValue.indexOf(_value);
        newValue = newValue.filter((_, i) => i !== ind);
      } else {
        newValue = [...newValue, _value];
      }
      createQuery(name, newValue.join(','));
      router.replace(getRouteParams());
    } else {
      createQuery(name, _value);
      router.replace(getRouteParams());
    }
  };

  return (
    <div className="col-6 row" style={{ padding: '10px' }}>
      <div
        onClick={handleClick}
        className="btn"
        style={{
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          padding: '0',
          borderStyle: 'solid',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor:
            getParams().get(name) == value || (type === 'select' && getParams().get(name)?.includes(value))
              ? '#314FC0'
              : 'white',
          borderWidth: '1px',
          borderColor:
            getParams().get(name) == value || (type === 'select' && getParams().get(name)?.includes(value))
              ? '#314FC0'
              : 'gray',
          color: 'white',
        }}
      >
        ✓
      </div>
      <div
        style={{
          width: 'auto',
          fontSize: '15px',
          fontWeight: '500',
          wordBreak: 'keep-all',
        }}
      >
        {title}
      </div>
    </div>
  );
}
