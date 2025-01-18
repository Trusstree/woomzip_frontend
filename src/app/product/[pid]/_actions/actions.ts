import { getProduct } from '@/actions/apis2/productAPI';

export async function loadProductData(
  productId: number,
): Promise<
  | [
      SummaryData,
      VendorData,
      FullTemplatesData,
      HalfTemplatesData,
      CardEntireTemplatesData,
      MasterPlanTemplatesData,
      DetailData,
    ]
  | [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
> {
  // 데이터 초기화

  const [productResponse, productError] = await getProduct(productId);
  if (productError) {
    console.error(productError);
    return [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  }

  console.log(productResponse.payload);

  const summaryData: SummaryData = {
    productId: productResponse.payload.productId,
    productName: productResponse.payload.productName,
    price: productResponse.payload.price,
    bedroom: productResponse.payload.bedroom,
    bathroom: productResponse.payload.bathroom,
    realUsableArea: productResponse.payload.realUsableArea,
    buildingArea: productResponse.payload.buildingArea,
    productImageUrl: productResponse.payload.productImageUrl,
    vendorName: productResponse.payload.vendor.vendorName,
    productIntro: productResponse.payload.productIntro,
  };

  const vendorData: VendorData = {
    vendorImageUrl: productResponse.payload.vendor.representativeImageUrl,
    representativeName: productResponse.payload.vendor.representativeName,
    vendorIntroduce: productResponse.payload.vendor.representativeIntro, //productResponse.payload.vendorIntroduce,
  };

  const fullTemplatesData: FullTemplatesData = productResponse.payload.fullTemplates;
  // .filter((template) => template.productTemplateType == '1')
  // .sort((a, b) => a.index - b.index)
  // .map((template) => ({
  //   title: template.title,
  //   description: template.description,
  //   productTemplateImageUrl: template.productTemplateImageUrl,
  // }));

  const halfTemplatesData: HalfTemplatesData = productResponse.payload.halfTemplates;
  const cardEntireTemplatesData: CardEntireTemplatesData = productResponse.payload.cardEntireResponse;
  const masterPlanTemplatesData: MasterPlanTemplatesData = productResponse.payload.masterPlanTemplates;

  const detailData: DetailData = {
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
