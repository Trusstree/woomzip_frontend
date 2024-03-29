"use client"

type ImageComponentProps = {
  data: any
  name: string
  title: string
  className?: string
}

export function ImageComponent(props: ImageComponentProps) {
  const { data, name, title, className } = props;

  return (
    <div className={`${className && ""} my-3`}>
      <img
        src={"/blur_image.png"}
        alt={name}
        width={200}
        height={200}
        style={{objectFit:"fill"}} />
      <h5 className="fw-bold mb-4">{title}</h5>
    </div>
  );
}
