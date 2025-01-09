// productCard.ts

// API 응답 타입 정의
interface ProductCard {
  id: number;
  productName: string;
  realUsableArea: number;
  bedroom: number;
  bathroom: number;
  price: number;
  productImageUrl: string;
}

interface ApiResponse {
  result: {
    code: number;
    message: string;
  };
  payload: ProductCard[];
}

// API 호출 함수
export async function getProductCard(): Promise<[ProductCard[] | null, Error | null]> {
  const url = '/products';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return [data.payload, null];
  } catch (error) {
    console.error('Error fetching product cards:', error);
    return [null, error as Error];
  }
}
