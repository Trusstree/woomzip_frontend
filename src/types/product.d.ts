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
};

type SummaryData = {
  productId: number;
  productName: string;
  productImageUrl: string;
  price: number;
  bedroom: number;
  bathroom: number;
  realUsableArea: number;
  buildingArea: number;
  vendorName: string;
  introduce: string;
};

type VenderData = {
  venderImageUrl: string;
  vendorName: string;
  venderIntroduce: string;
};

type TemplateData = {
  title: string;
  description: string;
  productTemplateImageUrl: string;
};
type Template1Data = Array<TemplateData>;
type Template2Data = Array<TemplateData>;
type Template3Data = {
  title: string;
  description: string;
  template: Array<TemplateData>;
};

type TemplatesData = {
  template1: Template1Data;
  template2: Template2Data;
  template3: Template3Data;
};

type MasterplanData = Array<Image>;

type DetailData = {
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
};
