"use client"

type BossCardProps = {
  url: string;
  className?: string;
}

export default function BossCard(props: BossCardProps) {
  const { url, className }=props;

  return (
    <div className={`${className} col-4`}>
      <div className={`card rounded-0 border-0`}>
        <div className="row g-0">
          <div className="col-4">
            <img src="image1.jpg" className="card-img-top rounded-0 h-100" alt="..." />
            </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title my-2">김XX 대표 리뷰</h5>
              <p className="card-text">안녕하세요, 내가 잘나서 회사가 잘 된 겁니다 ^^7</p>
              <a href={url} className="btn btn-outline">더보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}