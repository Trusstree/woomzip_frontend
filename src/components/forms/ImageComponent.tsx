"use client"

type ImageComponentProps = {
  title: string
  data: string
  className?: string
}

export function ImageComponent(props: ImageComponentProps) {
  const { title, data, className } = props;

  return (
    <div className={`${className ?? ""}`}>
      <img
        src={data}
        alt={title}
        width={188}
        height={188}
        style={{objectFit:"fill"}} />
      <h5 className="fw-bold mt-1 mb-4">{title}</h5>
    </div>
  );
}
