'use client';

export default function PlanningSelectSection({ title, text, children }) {
  return (
    <div style={{ marginBottom: '150px' }}>
      <div
        style={{
          fontSize: '25px',
          fontWeight: '600',
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: '19px', marginBottom: '30px' }}>{text}</div>
      <div className="row">{children}</div>
    </div>
  );
}
