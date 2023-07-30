"use client"

type BossCardProps = {
  url: string;
  src: string;
  className?: string;
}

export default function BossCard(props: BossCardProps) {
  const { url, src, className }=props;

  return (
    <div className={`${className} col-4`}  >
      <div className={`card rounded-3 border-0`} style={{backgroundColor:"#E3E3E3"}}>
        <div className="row g-0">
          <div className="col-6">

            <div className={`card rounded-start-3 border-0 h-100`} style={{backgroundColor:"#6764F7"}}>
              <div className="d-flex h-100">
                <img src={src} className="card-img-top m-1" alt="boss" />
                <div className="col-8 text-white">
                  <div className="card-body">
                    <h5 className="card-title my-2">김XX 대표 리뷰</h5>
                    <p className="card-text">
                    (주) 하우스팩토리<br/>
                    면허 : 건축<br/>
                    직원수 : 7명<br/>
                    2021 시공액 : 720억 원<br/>
                    시공능력평가액 :1020억 원<br/>
                    주력분야 : 단독주택 시공<br/>
                    <br/>
                    재무정보<br/>
                    자본금 : 15억 원<br/>
                    부채비율 : 21.7%<br/>
                    유동비율 : 321.22%<br/>
                    재무상태 총평 : 최상<br/>
                    <br/>
                    하우스팩토리 정보 더보기...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="col-6">
            <div className="card-body">
                <p className="card-text">
                  트러스 평점 4.53 / 5.0<br/>
                  건축주 평점 4.66 / 5.0<br/><br/>
                  “하우스팩토리를 만난건 제 건축에서 제일 큰 행운이었어요. 덕분...더보기”<br/><br/>
                  “단독주택을 짓는다는 것은 누군가의 꿈을 이뤄가는 과정이라고 생각합니다.”<br/>
                  (주)하우스팩토리 건설은  2011년부터 오로지 건축주 분들의 만족을 최우선 가치로 하며 지금까지 왔습니다. 만족을 드리기 위해 최고의 기술진들과 함께 고민하며, 꾸준한 소통을 통해 건축주께서 불안해하지 않고 완공까지 이어질 수 있도록 노력합니다. 하우스팩토리 건설은 건축주분들과의 인연을 중요시 하며 건축이 끝나고도 좋은 관계를 유지해나갑니다. 그 비결은 저희의 진심과 노력의 결과물이라고 생각합니다. 트러스를 통해 새로운 건축주분께서도 스마트팩토리와 함께 인연을 이어나가면 좋겠습니다.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}