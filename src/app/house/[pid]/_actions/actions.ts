"use server";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { getHouseHeartUser } from "@/actions/apis/heartAPI";
import { getHouse } from "@/actions/apis/houseAPI";
import { getExplanationHTML, parseSpecificationInfo } from "@/lib/parseUtil";
import { getUser } from "@/actions/apis/userAPI";

export async function loadData(hid: number) {
  "use server";
  let [houseData, imageData, optionData, specificationData, userData, reviewData, deliveryData, isHouseLike] = [
    undefined,
    undefined,
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
      userData,
      reviewData,
      deliveryData,
      isHouseLike,
    };
  }

  houseData = {
    ...data.data[0]["house_info"],
    specificity_info: parseSpecificationInfo(data.data[0]["house_info"]["specificity_info"]),
  };
  houseData.house_explanation = getExplanationHTML(houseData.house_explanation);
  houseData.price_variation = getExplanationHTML(houseData.price_variation);
  houseData.specification_info.specification_description = getExplanationHTML(
    houseData.specification_info.specification_description
  );

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

  const [user, userError] = await getUser(houseData["fk_seller_id"]);
  if (userError) {
    console.log(userError);
    return {
      houseData,
      imageData,
      optionData,
      specificationData,
      userData,
      reviewData,
      deliveryData,
      isHouseLike,
    };
  }

  userData = user.data[0].companyInfo?.profile || user.data[0].profile;
  reviewData = user.data[0].reviews;
  reviewData.houseReview = reviewData.houseReview?.map((e) => ({
    nickname: e.nickname,
    tag: typeof e["tag"] == "string" ? JSON.parse(e["tag"]) : e["tag"],
    rating: e.rating,
    created_at: e.created_at,
    updated_at: e.updated_at,
    id: e.house_review_id,
    comment: e.review_text,
    images: e.images,
  }));

  // 로그인 확인하기
  const at = await getUserAccessToken();
  if (!at)
    return {
      houseData,
      imageData,
      optionData,
      specificationData,
      userData,
      reviewData,
      deliveryData,
      isHouseLike,
    };

  const [heartData, heartError] = await getHouseHeartUser(hid);
  if (heartError) {
    console.error(heartError);
    return {
      houseData,
      imageData,
      optionData,
      specificationData,
      userData,
      reviewData,
      deliveryData,
      isHouseLike,
    };
  }

  isHouseLike = heartData?.data[0]["isHouseLike"];

  return {
    houseData,
    imageData,
    optionData,
    specificationData,
    userData,
    reviewData,
    deliveryData,
    isHouseLike,
  };
}
