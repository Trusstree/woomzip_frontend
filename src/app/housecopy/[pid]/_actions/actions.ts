import { getProduct } from '@/actions/apis2/productAPI';

export async function loadProductData(
  productId: number,
): Promise<
  | [SummaryData, VenderData, TemplatesData, MasterplanData, DetailData]
  | [undefined, undefined, undefined, undefined, undefined]
> {
  // 데이터 초기화

  const [productResponse, productError] = await getProduct(productId);
  if (productError) {
    console.error(productError);
    return [undefined, undefined, undefined, undefined, undefined];
  }

  const summaryData: SummaryData = {
    productId: productResponse.payload.productId,
    productName: productResponse.payload.productName,
    price: productResponse.payload.price,
    bedroom: productResponse.payload.bedroom,
    bathroom: productResponse.payload.bathroom,
    realUsableArea: productResponse.payload.realUsableArea,
    buildingArea: productResponse.payload.buildingArea,
    productImageUrl: '/blur_image.png', //productResponse.payload.productImageUrl,
    vendorName: productResponse.payload.vendorName,
    introduce: '이 설명이 보인다면 housecopy/[pid]의 _actions에서 고치세요.',
  };

  const vendorData: VenderData = {
    venderImageUrl: '/blue_image.png', //productResponse.payload.venderImageUrl,
    vendorName: productResponse.payload.vendorName,
    venderIntroduce: '이 설명이 보인다면 housecopy/[pid]의 _actions에서 고치세요.', //productResponse.payload.venderIntroduce,
  };

  const template1Data: Template1Data = productResponse.payload.productTemplates
    .filter((template) => template.productTemplateType == '1')
    .sort((a, b) => a.index - b.index)
    .map((template) => ({
      title: template.title,
      description: template.description,
      productTemplateImageUrl: template.productTemplateImageUrl,
    }));

  const template2Data: Template2Data = productResponse.payload.productTemplates
    .filter((template) => template.productTemplateType == '2')
    .sort((a, b) => a.index - b.index)
    .map((template) => ({
      title: template.title,
      description: template.description,
      productTemplateImageUrl: template.productTemplateImageUrl,
    }));

  const template3Data: Template3Data = {
    title: '으응...',
    description: '헤으응...;;',
    template: productResponse.payload.productTemplates
      .filter((template) => template.productTemplateType == '3')
      .sort((a, b) => a.index - b.index)
      .map((template) => ({
        title: template.title,
        description: template.description,
        productTemplateImageUrl: template.productTemplateImageUrl,
      })),
  };
  const templatesData: TemplatesData = {
    template1: template1Data,
    template2: template2Data,
    template3: template3Data,
  };

  const masterplanData: MasterplanData = [];

  const detailData: DetailData = {
    productId: productResponse.payload.productId,
    productName: productResponse.payload.productName,
    price: productResponse.payload.price,
    bedroom: productResponse.payload.bedroom,
    bathroom: productResponse.payload.bathroom,
    realUsableArea: productResponse.payload.realUsableArea,
    buildingArea: productResponse.payload.buildingArea,
    productImageUrl: productResponse.payload.productImageUrl,
    //vendorName: productResponse.payload.vendorName,
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
  };

  return [summaryData, vendorData, templatesData, masterplanData, detailData];
}
