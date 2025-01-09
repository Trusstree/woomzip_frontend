import { getProductCard } from '@/actions/apis2/productCardAPI';

// 상품 카드 데이터 타입 정의
type ProductCardData = {
  id: number;
  productName: string;
  realUsableArea: number;
  bedroom: number;
  bathroom: number;
  price: number;
  productImageUrl: string;
};

export async function loadProductCardData() {
  'use server';

  // 초기화: productCardData는 undefined로 설정
  let productCardData: ProductCardData[] | undefined = undefined;

  try {
    // API 호출: 상품 카드 데이터
    const productCardResponse = await getProductCard();

    // 데이터 처리 - ProductCard API
    if (Array.isArray(productCardResponse)) {
      // API 응답 데이터를 각 상품 카드 데이터에 맞게 변환
      productCardData = productCardResponse.map((product) => {
        return {
          id: product.id, // API에서 받은 id
          productName: product.productName, // API에서 받은 productName
          realUsableArea: product.realUsableArea, // API에서 받은 realUsableArea
          bedroom: product.bedroom, // API에서 받은 침실 수
          bathroom: product.bathroom, // API에서 받은 욕실 수
          price: product.price, // 가격
          productImageUrl: product.productImageUrl, // 이미지 URL
        };
      });
    }

    return { productCardData };
  } catch (error) {
    console.error('Error fetching product card data:', error);
    return { productCardData };
  }
}
