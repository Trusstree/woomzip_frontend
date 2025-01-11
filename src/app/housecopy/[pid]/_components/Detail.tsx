import { detailPriceText } from '@/lib/stringUtil';
import { parseSpecificationInfo } from '@/lib/parseUtil';

export default function Detail({ detailData }: { detailData: DetailData }) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '100px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          wordBreak: 'keep-all',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(20px, 4vw, 30px)',
            fontWeight: '700',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          제품 상세정보
        </div>
        <div style={{ color: '#ffffff', marginTop: '50px', fontWeight: '300', fontSize: 'clamp(14px, 2vw, 16px)' }}>
          <div>제품 이름 : {detailData.productName}</div>
          <div>제품 가격 : {detailData.price} (부가세 제외)</div>
          <div>
            침실 및 욕실 : {detailData.bedroom}개의 침실과 {detailData.bathroom}개의 욕실
          </div>
          <div>실사용 평수 : {detailData.realUsableArea}평</div>
          <div>건축 면적 : {detailData.buildingArea}㎡</div>
          <div>AS 보증기간 : {detailData.warrantyPeriod}</div>
          <div>제품 특이사항 : {detailData.specialFeature}</div>
          <div>구조자재 : {detailData.structureMaterial}</div>
          <div>벽체자재 : {detailData.wallMaterial}</div>
          <div>단열자재 : {detailData.insulationMaterial}</div>
          <div>난방방법 : {detailData.heatingMethod}</div>
          <div>내장자재 : {detailData.interiorMaterial}</div>
          <div>창호자재 : {detailData.windowMaterial}</div>
          <div>외장자재 : {detailData.exteriorMaterial}</div>
          <div>지붕자재 : {detailData.roofMaterial}</div>
          <div>주방자재 : {detailData.kitchenMaterial}</div>
          <div>욕실자재 : {detailData.bathroomMaterial}</div>
          <div>조명자재 : {detailData.lightingMaterial}</div>
          <div>포함가구 : {detailData.includedFurniture}</div>
          <div>기타사항 : {detailData.otherDetail}</div>
          <div>판매사 : 움집, (주)트러스트리</div>
          <div>디자인 및 제작사 : (주)풍산패시브하우스</div>
          <div>
            가격에 포함된 사항 : 본 제품의 가격은 제품 제작비용만을 포함합니다. 배송비용 및 기타 추가비용은 요청에 따라
            추가부가될 수 있습니다. 제품을 설치하기 위하여 토지에 기초 및 토목공사와 인입공사 등의 비용은 포함되어 있지
            않으며 해당 공사들은 건축주가 직접 시행해야 하며 서비스 요청시 해당 비용이 추가됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
