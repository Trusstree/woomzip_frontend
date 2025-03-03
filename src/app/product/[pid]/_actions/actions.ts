import { getProduct } from '@/actions/apis2/productAPI';

export async function loadProductData(
  productId: number,
): Promise<
  | [
      ProductSummaryData,
      ProductVendorData,
      ProductFullTemplatesData,
      ProductHalfTemplatesData,
      ProductCardEntireTemplatesData,
      ProductMasterPlanTemplatesData,
      ProductDetailData,
    ]
  | [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
> {
  //console.time('getProduct API 호출');
  // 데이터 초기화
  const [productResponse, productError] = await getProduct(productId, { 'Cache-Control': 'public, max-age=2592000' }); // 한 달
  if (productError) {
    console.error(productError);
    return [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  }

  // product intro는 개행문자 후처리해주어야 함
  const productIntro = productResponse.payload.productIntro.replaceAll('\n', '<br></br>');

  const summaryData: ProductSummaryData = {
    productId: productResponse.payload.productId,
    productName: productResponse.payload.productName,
    price: productResponse.payload.price,
    bedroom: productResponse.payload.bedroom,
    bathroom: productResponse.payload.bathroom,
    realUsableArea: productResponse.payload.realUsableArea,
    buildingArea: productResponse.payload.buildingArea,
    productImageUrl: productResponse.payload.productImageUrl,
    vendorName: productResponse.payload.vendor.vendorName,
    productIntro: productIntro,
  };

  const vendorData: ProductVendorData = {
    vendorImageUrl: productResponse.payload.vendor.representativeImageUrl,
    representativeName: productResponse.payload.vendor.representativeName,
    vendorIntroduce: productResponse.payload.vendor.representativeIntro,
  };

  const fullTemplatesData: ProductFullTemplatesData = productResponse.payload.fullTemplates;

  const halfTemplatesData: ProductHalfTemplatesData = productResponse.payload.halfTemplates;
  const cardEntireTemplatesData: ProductCardEntireTemplatesData = productResponse.payload.cardEntireResponse;
  const masterPlanTemplatesData: ProductMasterPlanTemplatesData = productResponse.payload.masterPlanTemplates;

  const detailData: ProductDetailData = {
    productId: productResponse.payload.productId,
    productName: productResponse.payload.productName,
    price: productResponse.payload.price,
    bedroom: productResponse.payload.bedroom,
    bathroom: productResponse.payload.bathroom,
    realUsableArea: productResponse.payload.realUsableArea,
    buildingArea: productResponse.payload.buildingArea,
    productImageUrl: productResponse.payload.productImageUrl,
    vendorName: productResponse.payload.vendor.vendorName,
    structureMaterial: productResponse.payload.structureMaterial,
    wallMaterial: productResponse.payload.wallMaterial,
    insulationMaterial: productResponse.payload.insulationMaterial,
    heatingMethod: productResponse.payload.heatingMethod,
    interiorMaterial: productResponse.payload.interiorMaterial,
    windowMaterial: productResponse.payload.windowMaterial,
    exteriorMaterial: productResponse.payload.exteriorMaterial,
    roofMaterial: productResponse.payload.roofMaterial,
    kitchenMaterial: productResponse.payload.kitchenMaterial,
    bathroomMaterial: productResponse.payload.bathroomMaterial,
    lightingMaterial: productResponse.payload.lightingMaterial,
    includedFurniture: productResponse.payload.includedFurniture,
    otherDetail: productResponse.payload.otherDetail,
    warrantyPeriod: productResponse.payload.warrantyPeriod,
    specialFeature: productResponse.payload.specialFeature,
    priceIncludes: productResponse.payload.priceIncludes,
  };

  //console.timeEnd('getProduct API 호출');
  return [
    summaryData,
    vendorData,
    fullTemplatesData,
    halfTemplatesData,
    cardEntireTemplatesData,
    masterPlanTemplatesData,
    detailData,
  ];
}
