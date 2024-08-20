'use client';

import useImageInfo from '@/app/mypage/[uid]/house/_store/imageInfo';
import InputImageComponent from '@/components/InputImageComponent';

type HouseImageComponentProps = {
  uid: string | number;
};

export function HouseImageComponent(props: HouseImageComponentProps) {
  const { uid } = props;

  // image states
  const {
    representativeImage,
    externalImages,
    internalImages,
    floorPlanImages,
    elevationPlanImages,
    setRepresentativeImage,
    setExternalImages,
    setInternalImages,
    setFloorPlanImages,
    setElevationPlanImages,
  } = useImageInfo();

  return (
    <div className="mt-4 py-4" style={{ borderTop: '1px solid gray' }}>
      <h3 style={{ margin: '50px 0' }}>5. 제품 사진을 업로드 해주세요.</h3>

      <div className="row mb-4">
        <div className="col-12" style={{ fontSize: '17px' }}>
          <span style={{ color: 'red' }}>* </span>대표사진 (1장)
        </div>
        <InputImageComponent
          s3Url={`houses/${uid}`}
          name={'representative_image'}
          images={representativeImage}
          setImages={setRepresentativeImage}
          maxLength={1}
        />
      </div>

      <div
        style={{
          width: 'auto',
          borderRadius: '10px',
          backgroundColor: 'lightgray',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        💡 실물사진을 우선하여, 최대한 자세히 볼 수 있도록 많은 사진을 첨부해주세요.
      </div>
      <div className="row mb-4">
        <div className="col-12" style={{ fontSize: '17px' }}>
          <span style={{ color: 'red' }}>* </span>제품 외부 사진 (여러장 추가 가능)
        </div>
        <InputImageComponent
          s3Url={`houses/${uid}`}
          name={'external_images'}
          images={externalImages}
          setImages={setExternalImages}
        />
      </div>

      <div className="row mb-4">
        <div className="col-12" style={{ fontSize: '17px' }}>
          <span style={{ color: 'red' }}>* </span>제품 내부 사진 (여러장 추가 가능)
        </div>
        <InputImageComponent
          s3Url={`houses/${uid}`}
          name={'internal_images'}
          images={internalImages}
          setImages={setInternalImages}
        />
      </div>

      <div className="row mb-4">
        <div className="col-12" style={{ fontSize: '17px' }}>
          설계 평면도 사진 (여러장 추가 가능)
        </div>
        <InputImageComponent
          s3Url={`houses/${uid}`}
          name={'floor_plan_images'}
          images={floorPlanImages}
          setImages={setFloorPlanImages}
        />
      </div>

      <div className="row mb-4">
        <div className="col-12" style={{ fontSize: '17px' }}>
          설계 입면도 사진 (여러장 추가 가능)
        </div>
        <InputImageComponent
          s3Url={`houses/${uid}`}
          name={'elevation_plan_images'}
          images={elevationPlanImages}
          setImages={setElevationPlanImages}
        />
      </div>
    </div>
  );
}
