import { getProductData } from '@/actions/apis2/productAPI';
import { getProductCard } from '@/actions/apis2/productCardAPI'; // productCardAPI에서 getProductCardData 가져오기

export async function loadData(productId: number) {
  'use server';

  // 데이터 초기화
  let houseData = undefined;
  let imageData = undefined;
  let specificationData = undefined;
  let vendorData = undefined;
  let productCardData = undefined;

  try {
    // API 호출: 상품, 상품 카드 데이터
    const [productResponse, productCardResponse] = await Promise.all([
      getProductData(productId),
      getProductCard(), // productCardData는 배열 형태로 반환된다고 가정
    ]);

    // 데이터 처리 - Product API
    if (productResponse[0]) {
      const payload = productResponse[0].payload;

      houseData = {
        productId: payload.productId,
        productName: payload.productName,
        price: payload.price,
        bedroom: payload.bedroom,
        bathroom: payload.bathroom,
        realUsableArea: payload.realUsableArea,
        buildingArea: payload.buildingArea,
        warrantyPeriod: payload.warrantyPeriod,
        specialFeature: payload.specialFeature,
        structureMaterial: payload.structureMaterial,
        wallMaterial: payload.wallMaterial,
        insulationMaterial: payload.insulationMaterial,
        heatingMethod: payload.heatingMethod,
        interiorMaterial: payload.interiorMaterial,
        windowMaterial: payload.windowMaterial,
        exteriorMaterial: payload.exteriorMaterial,
        roofMaterial: payload.roofMaterial,
        kitchenMaterial: payload.kitchenMaterial,
        bathroomMaterial: payload.bathroomMaterial,
        lightingMaterial: payload.lightingMaterial,
        includedFurniture: payload.includedFurniture,
        otherDetail: payload.otherDetail,
        priceIncludes: payload.priceIncludes,
        vendorId: payload.vendorId,
        vendorName: payload.vendorName,
      };

      // 이미지 데이터 처리
      imageData = payload.productTemplates.map((template) => ({
        templateId: template.templateId,
        title: template.title,
        description: template.description,
        productTemplateImageUrl: template.productTemplateImageUrl,
        productTemplateType: template.productTemplateType,
      }));

      // 사양 데이터 처리
      specificationData = {
        specialFeature: payload.specialFeature,
      };
    }

    // 데이터 처리 - ProductCard API
    if (Array.isArray(productCardResponse)) {
      productCardData = productCardResponse; // 바로 배열 형태로 사용
    }

    // 모든 데이터 반환
    return { houseData, imageData, specificationData, vendorData, productCardData };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { houseData, imageData, specificationData, vendorData, productCardData };
  }
}
