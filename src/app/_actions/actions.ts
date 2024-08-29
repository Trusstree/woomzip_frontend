'use server';

import { getHouses } from '@/actions/apis/houseAPI';
import { getPosts } from '@/actions/apis/postAPI';

export async function loadPostData(searchConditions: Object) {
  const numShowItems: number = 10;
  const params = { ...searchConditions, skip: 1, limit: numShowItems };

  const [data, error] = await getPosts(params);

  if (error) {
    console.error(error);
    return undefined;
  }

  return data.data[0].posts;
}

export async function loadHouseData(searchConditions: Object) {
  const numShowItems: number = 10;
  const params = { ...searchConditions, skip: 1, limit: numShowItems };
  const [rawHouseData, houseError] = await getHouses(params);

  if (houseError) {
    console.error(houseError);
    return undefined;
  }

  return rawHouseData.data[0].houses;
}
