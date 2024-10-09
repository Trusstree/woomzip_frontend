import HouseCategory from '@/app/test/4/_components/HouseCategory';
import FillteringList from '@/app/test/4/_components/FillteringList';
import BadgeList from '@/app/test/4/_components/BadgeList';
import Image from 'next/image';
import { loadHouseData } from '@/app/test/4/_actions/actions';
import { HighlightCardPriceText } from '@/app/test/4/_components/HighlightCardPriceText';

export default async function test4({ searchParams }) {
  const [numShowItems, numShowPages] = [36, 10];
  const [houseData, houseCount] = await loadHouseData(searchParams, numShowItems);

  return (
    <>
      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto' }}>
        <HouseCategory></HouseCategory>
        <FillteringList></FillteringList>
        <BadgeList />

        <div className="row">
          {houseData?.map((product, i) => (
            <div key={i} className="col-md-6 col-12">
              <div className="card" style={{ width: '100%', border: 'none', marginBottom: '30px' }}>
                <div
                  className="container"
                  style={{
                    backgroundColor: '#000000',
                    width: '100%',
                    aspectRatio: '5 / 3',
                    borderRadius: '5px',
                    position: 'relative',
                  }}
                >
                  <Image style={{objectFit:'cover', borderRadius:'5px'}} src={product.house_img_urls} alt={product.house_name + ' image'} fill />
                </div>
                <div style={{ padding: '10px' }}>
                  <div style={{ color: '#777777', fontSize: '17px' }}>{product.company_name}</div>
                  <div className="d-flex justify-content-between">
                    <div style={{ color: '#222222', fontSize: '22px' }}>{product.house_name}</div>
                    <div style={{ color: '#222222', fontSize: '22px' }}>
                      <HighlightCardPriceText price={product.final_price} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
