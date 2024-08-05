"use server";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { getHouseHeartUser } from "@/actions/apis/heartAPI";
import { getHouse } from "@/actions/apis/houseAPI";
import { parseSpecificationInfo } from "@/lib/parseUtil";

export async function loadData(hid: number) {
  "use server";
  let [houseData, imageData, optionData, specificationData, deliveryData, isHouseLike] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  const [data, error] = await getHouse(hid);
  if (error) {
    console.error(error);
    return {
      houseData,
      imageData,
      optionData,
      specificationData,
      deliveryData,
    };
  }

  houseData = {
    ...data.data[0]["house_info"],
    specificity_info: parseSpecificationInfo(data.data[0]["house_info"]["specificity_info"]),
  };

  imageData = [
    ...data.data[0]["house_image"]["representative_images"],
    ...data.data[0]["house_image"]["external_images"],
    ...data.data[0]["house_image"]["internal_images"],
    ...data.data[0]["house_image"]["elevation_plan_images"],
    ...data.data[0]["house_image"]["floor_plan_images"],
  ];
  optionData = data.data[0]["option_info"];
  specificationData = data.data[0]["house_info"]["specification_info"];
  deliveryData = data.data[0]["house_info"]["delivery_unavailable"].join(", ");

  // 로그인 확인하기
  const at = await getUserAccessToken();
  if (!at) return { houseData, imageData, optionData, specificationData, deliveryData, isHouseLike };

  const [heartData, heartError] = await getHouseHeartUser(hid);
  if (heartError) {
    console.error(heartError);
    return { houseData, imageData, optionData, specificationData, deliveryData, isHouseLike };
  }

  isHouseLike = heartData?.data[0]["isHouseLike"];

  return { houseData, imageData, optionData, specificationData, deliveryData, isHouseLike };
}
