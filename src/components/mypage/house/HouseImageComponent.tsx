import { ImageComponent } from "@/components/forms/ImageComponent";
import { ImageInputComponent } from "@/components/forms/ImageInputComponent";
import { ImageThumbComponent } from "@/components/forms/ImageThumbComponent";

type HouseImageComponentProps = {
  uid: string | number;
  imageList: any;
  setImageList: Function;
};

export function HouseImageComponent(props: HouseImageComponentProps) {
  const { uid, imageList, setImageList } = props;
  console.log(uid);

  return (
    <div className="mt-4 py-4" style={{ borderTopStyle: "solid", borderTopColor: "#101648", borderTopWidth: "2px" }}>
      <h3 className="fw-bold mb-4">제품 사진을 업로드 해주세요.</h3>

      <div className="row mb-4">
        <h5 className="col-12 fw-bold">대표사진 (1장)</h5>
        {imageList["representative_image"] ? (
          <ImageComponent
            className={"col-2 pb-3"}
            data={imageList["representative_image"]}
            title={"representative_image"}
          />
        ) : (
          <ImageThumbComponent uid={uid} className={"col-2"} data={imageList} setData={setImageList} />
        )}
      </div>

      <div className="row mb-4">
        <h5 className="fw-bold">제품 외부 사진 (여러장 추가 가능)</h5>
        {imageList["external_images"]?.map((e, i) => (
          <ImageComponent key={i} className={"col-2 pb-3"} data={imageList["external_images"][i]} title={e.title} />
        ))}
        <ImageInputComponent
          uid={uid}
          className={"col-2"}
          data={imageList}
          setData={setImageList}
          name={"external_images"}
        />
      </div>

      <div className="row mb-4">
        <h5 className="fw-bold">제품 내부 사진 (여러장 추가 가능)</h5>
        {imageList["internal_images"]?.map((e, i) => (
          <ImageComponent key={i} className={"col-2 pb-3"} data={imageList["internal_images"][i]} title={e.title} />
        ))}
        <ImageInputComponent
          uid={uid}
          className={"col-2"}
          data={imageList}
          setData={setImageList}
          name={"internal_images"}
        />
      </div>

      <div className="row mb-4">
        <h5 className="fw-bold">설계도면 {`<평면도>`} 사진 (여러장 추가 가능)</h5>
        {imageList["floor_plan_images"]?.map((e, i) => (
          <ImageComponent key={i} className={"col-2 pb-3"} data={imageList["floor_plan_images"][i]} title={e.title} />
        ))}
        <ImageInputComponent
          uid={uid}
          className={"col-2"}
          data={imageList}
          setData={setImageList}
          name={"floor_plan_images"}
        />
      </div>

      <div className="row mb-4">
        <h5 className="fw-bold">설계도면 {`<입면도>`} 사진 (여러장 추가 가능)</h5>
        {imageList["elevation_plan_images"]?.map((e, i) => (
          <ImageComponent
            key={i}
            className={"col-2 pb-3"}
            data={imageList["elevation_plan_images"][i]}
            title={e.title}
          />
        ))}
        <ImageInputComponent
          uid={uid}
          className={"col-2"}
          data={imageList}
          setData={setImageList}
          name={"elevation_plan_images"}
        />
      </div>
    </div>
  );
}
