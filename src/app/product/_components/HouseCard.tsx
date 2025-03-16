import { HighlightCardPriceText } from '@/app/product/_components/HighlightCardPriceText';
import Link from 'next/link';
import styles from '@/app/product/_styles/houseCard.module.css';
import Image from '@/components/ImageFallback';

export default function productData({ productData }: { productData: ProductsData }) {
  const { productId, productName, realUsableArea, bedroom, bathroom, price, productImageUrl } = productData;

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: '100%', border: 'none', marginBottom: '60px' }}>
        <Link prefetch={true} passHref className={`container ${styles.img_container} ${styles.img_hover}`} href={`/product/${productId}`}>
          <Image loading={"eager"} src={productImageUrl} alt={productName + ' image'} fill/>
        </Link>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '15px' }}>{productName}</div>
          <div
            className="d-flex"
            style={{ fontSize: '15px', wordBreak: 'keep-all', marginTop: '5px', fontWeight: '500', color: '#555555' }}
          >
            <div>{realUsableArea}평</div>
            <div style={{ margin: '0 10px' }}>·</div>
            <div>침실 {bedroom}개</div>
            <div style={{ margin: '0 10px' }}>·</div>
            <div>욕실 {bathroom}개</div>
          </div>
          <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }}>
            <HighlightCardPriceText price={price} />
            <span style={{ fontWeight: '500', color: '#555555', fontSize: '15px' }}> / 채</span>
          </div>
        </div>
      </div>
    </div>
  );
}
