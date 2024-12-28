'use client';

import { alertError } from '@/lib/alertUtil';
import { deleteS3Url, setS3Url } from '@/lib/s3Util';
import imageCompression from 'browser-image-compression';
import moment from 'moment';
import Image from 'next/image';

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export default function InputImageComponent({
  s3Url,
  name,
  images,
  setImages,
  maxLength,
}: {
  s3Url: string;
  name: string;
  images: any;
  setImages: any;
  maxLength?: number;
}) {
  const handleChange = async (e) => {
    const files = Array.from(e.target.files) as Array<File>;
    let inputImgs = files.filter((ee) => ee?.type?.split('/')[0] == 'image');
    const imagesLen = images?.length ?? 0;

    if (maxLength) {
      if (inputImgs.length + imagesLen > maxLength) {
        alertError(
          '너무 많은 사진이 들어왔어요..',
          `해당 선택지에는 사진을 최대 ${maxLength}장까지 넣을 수 있어요. 사진을 지운 후에 다시 넣어주세요!`,
        );
      }
      inputImgs = inputImgs.filter((_, i) => imagesLen + i < maxLength);
    }

    let resImgs = [];
    for (const [i, e] of inputImgs.entries()) {
      const compressedBlob = await imageCompression(e, options);
      const compressedImage = new File([compressedBlob], e.name, { type: e.type });
      const title = 'images' + moment().format(`YYYYMMDDHHmmss`) + `${i}`;
      const url = `${s3Url}/${title}.${e.type.split('/')[1]}`;
      const [response, error] = await setS3Url(url, compressedImage);

      if (error) {
        console.error(error);
        return;
      }
      resImgs.push(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`);
    }

    setImages([...images, ...resImgs]);
  };

  const deleteImage = async (index) => {
    const url = images[index].split(`${process.env.NEXT_PUBLIC_AWS_S3_URL}/`)[1];
    await deleteS3Url(url);
    setImages(images.filter((_, i) => i != index));
  };

  return (
    <div>
      <div>
        <label htmlFor={`images_${name}`}>
          <div
            className="btn btn-lg"
            style={{
              backgroundColor: 'black',
              color: '#ffffff',
              width: '100%',
              borderRadius: '25px',
              fontSize: '15px',
              height: '36px',
              padding: '5px 12px',
            }}
          >
            클릭하여 추가
          </div>
        </label>
        <input
          id={`images_${name}`}
          style={{ display: 'none' }}
          accept={'image/*'}
          type={'file'}
          onChange={handleChange}
          multiple
        />
      </div>
      <div className="row flex-nowrap overflow-auto">
        {images?.map((e, i) => (
          <div className="col-2 card p-0 mx-3" key={i} style={{ position: 'relative', height: '200px' }}>
            <Image className={'card-img-top'} src={e} alt={`images ${name} ${i}`} fill={true} />
            <div className="card-img-overlay p-0">
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-lg"
                  style={{ backgroundColor: '#cc1100' }}
                  onClick={() => {
                    deleteImage(i);
                  }}
                >
                  <span className="w-100 text-white">X</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
