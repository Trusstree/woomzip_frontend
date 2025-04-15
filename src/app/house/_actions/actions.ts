import { getProducts } from '@/actions/apis2/productAPI';
import { arrayMin, arraySort } from '@/lib/functionUtil';

export async function loadProductsData(searchParams, numShowItems): Promise<Array<ProductsData>> {
  const rawPage = Number(searchParams['page']);
  const page = rawPage > 0 ? rawPage : 1;

  const searchCondition = {
    q: searchParams['q'],
    price_min: searchParams['min_price'],
    price_max: searchParams['max_price'],
    floor_area_min: searchParams['floor_area_min'],
    floor_area_max: searchParams['floor_area_max'],
    room_count: Number(arraySort(searchParams['room_count']?.split(',').map((e) => Number(e)))),
    toilet_count: Number(arraySort(searchParams['toilet_count']?.split(',').map((e) => Number(e)))),
    floor_count: Number(arraySort(searchParams['floor_count']?.split(',').map((e) => Number(e)))),
    warranty: Number(arrayMin(searchParams['warranty']?.split(',').map((e) => Number(e)))),
    estimate_duration: Number(arrayMin(searchParams['estimate_duration']?.split(',').map((e) => Number(e)))),
    frame: arraySort(searchParams['frame']?.split(',')),
    specificity: arraySort(searchParams['specificity']?.split(',')),
    has_model: searchParams['has_model'] == '1' ? 1 : undefined,
    is_hut: searchParams['is_hut'] == '1' ? 1 : undefined,
    tag: searchParams['tag'],
  };

  for (const key in searchCondition) {
    if (!searchCondition.hasOwnProperty(key)) {
      delete searchCondition[key];
    } else if (!searchCondition[key] || searchCondition[key].length == 0) {
      delete searchCondition[key];
    }
  }

  const params = {
    skip: numShowItems * (page - 1) + 1,
    limit: numShowItems,
    ...searchCondition,
  };

  const [data, error] = await getProducts({ 'Cache-Control': 'public, max-age=2592000' }); // 한 달
  if (error) {
    console.error(error);
    return undefined;
  }

  const productData: Array<ProductsData> = data.payload.map((product) => ({
    productId: product.id,
    productImageUrl: product.productImageUrl,
    productName: product.productName,
    price: product.price,
    bedroom: product.bedroom,
    bathroom: product.bathroom,
    realUsableArea: product.realUsableArea,
  }));

  return productData;
}
