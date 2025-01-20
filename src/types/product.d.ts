/// getProducts
type ApiProductsResponse = ApiResponse<Array<ApiProductsData>>;

type ApiProductsData = {
  id: number;
  productName: string;
  realUsableArea: number;
  bedroom: number;
  bathroom: number;
  price: number;
  productImageUrl: string;
};

type ProductsData = {
  productId: number;
  productName: string;
  realUsableArea: number;
  bedroom: number;
  bathroom: number;
  price: number;
  productImageUrl: string;
};

///getProduct
type ApiProductResponse = ApiResponse<ApiProductData>;

type ProductTemplate = {
  templateId: number;
  title: string;
  description: string;
  productTemplateImageUrl: string;
  productTemplateType: string;
  index: number;
};

type ApiProductData = {
  vendor: {
    createdDate: string;
    updatedDate: string;
    id: number;
    representativeName: string;
    representativeImageUrl: string;
    representativeIntro: string;
    vendorName: string;
    vendorIntro: string;
  };
  productId: number;
  productName: string;
  productImageUrl: string;
  productIntro: string;
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
  fullTemplates: FullTemplatesData;
  halfTemplates: HalfTemplatesData;
  cardEntireResponse: CardEntireTemplatesData;
  masterPlanTemplates: MasterplanTemplatesData;
};

type ProductSummaryData = {
  productId: number;
  productName: string;
  productImageUrl: string;
  productIntro: string;
  price: number;
  bedroom: number;
  bathroom: number;
  realUsableArea: number;
  buildingArea: number;
  vendorName: string;
};

type ProductVendorData = {
  vendorImageUrl: string;
  representativeName: string;
  vendorIntroduce: string;
};

type ProductFullTemplateData = {
  title: string;
  description: string;
  productTemplateImageUrl: string;
};
type ProductHalfTemplateData = {
  title: string;
  description: string;
  productTemplateImageUrl: string;
};
type ProductCardTemplateData = {
  title: string;
  description: string;
  productTemplateImageUrl: string;
};
type ProductMasterPlanTemplateData = {
  title: string;
  description: string;
  productTemplateImageUrl: string;
};

type ProductFullTemplatesData = Array<ProductFullTemplateData>;
type ProductHalfTemplatesData = Array<ProductHalfTemplateData>;
type ProductCardEntireTemplatesData = {
  cardTemplateTitle: string;
  cardTemplateDescription: string;
  cardResponses: Array<CardTemplateData>;
};
type ProductMasterPlanTemplatesData = Array<ProductMasterplanTemplateData>;

type ProductDetailData = {
  productId: number;
  productName: string;
  productImageUrl: string;
  vendorName: string;
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
};
