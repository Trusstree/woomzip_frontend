// porductAPI.ts

// API 응답 타입 정의
interface ProductTemplate {
  templateId: number;
  title: string;
  description: string;
  productTemplateImageUrl: string;
  productTemplateType: string;
  index: number;
}

interface ProductPayload {
  productId: number;
  productName: string;
  productImageUrl: string;
  price: number;
  bedroom: number;
  bathroom: number;
  realUsableArea: number;
  buildingArea: number;
  warrantyPeriod: number;
  specialFeature: string;
  structureMaterial: string;
  wallMaterial: string;
  insulationMaterial: string;
  heatingMethod: string;
  interiorMaterial: string;
  windowMaterial: string;
  exteriorMaterial: string;
  roofMaterial: string;
  kitchenMaterial: string;
  bathroomMaterial: string;
  lightingMaterial: string;
  includedFurniture: string;
  otherDetail: string;
  priceIncludes: string;
  vendorId: number;
  vendorName: string;
  productTemplates: ProductTemplate[];
}

interface ApiResponse {
  result: {
    code: number;
    message: string;
  };
  payload: ProductPayload;
}

// API 호출 함수
export async function getProductData(productId: number): Promise<[ApiResponse | null, Error | null]> {
  const url = `/products/${productId}`;

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
    return [data, null];
  } catch (error) {
    console.error('Error fetching house data:', error);
    return [null, error as Error];
  }
}
