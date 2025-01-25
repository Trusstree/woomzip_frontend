import Image from '@/components/ImageFallback';

export default function HalfTemplate({ templatesData }: { templatesData: ProductHalfTemplatesData }) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '100px 0',
      }}
    >
      <div>
        {templatesData.map((t, i) =>
          i % 2 == 1 ? (
            <div key={i} className="row">
              <div
                className="col-md-6 col-12"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontSize: 'clamp(25px, 3vw, 27px)',
                    fontWeight: '700',
                    wordBreak: 'keep-all',
                  }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    width: '90%',
                    color: '#ffffff',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: '350',
                    wordBreak: 'keep-all',
                    margin: '30px 0 30px 5%',
                  }}
                >
                  {t.description}
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                  <Image
                    width={900}
                    height={900}
                    src={t.productTemplateImageUrl}
                    alt={'pic3'}
                    style={{ objectFit: 'cover', height: 'auto', width: '100%', aspectRatio: '1' }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="row" style={{ margin: '100px 0', padding: '100px 0' }}>
              <div className="col-md-6 col-12 order-md-1 order-2">
                <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                  <Image
                    width={900}
                    height={900}
                    src={t.productTemplateImageUrl}
                    alt={'pic3'}
                    style={{ objectFit: 'cover', height: 'auto', width: '100%', aspectRatio: '1' }}
                  />
                </div>
              </div>
              <div
                className="col-md-6 col-12 order-md-2 order-1"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '90%',
                    marginLeft: '3%',
                    color: '#ffffff',
                    fontSize: 'clamp(25px, 3vw, 27px)',
                    fontWeight: '700',
                    wordBreak: 'keep-all',
                  }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    width: '90%',
                    color: '#ffffff',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: '350',
                    wordBreak: 'keep-all',
                    margin: '30px 0 30px 3%',
                  }}
                >
                  {t.description}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
