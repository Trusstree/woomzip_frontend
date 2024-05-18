import House from "@/components/mypage/House";
import build from "next/dist/build";
import { cardPriceText } from "./stringUtil";

export const algorithm = (data: any) => {
  console.log(data);


  let systemConstant = 1;
  if (data["system"] == "농막") {
    systemConstant = 0;
  } else if (data["system"] == "주택") {
    systemConstant = 1;
  }

  let cityConstant = 1;
  if (data["city"] == "경기도") {
    cityConstant = 1;
  } else if (data["city"] == "강원도") {
    cityConstant = 1;
  } else if (data["city"] == "충청북도") {
    cityConstant = 1;
  } else if (data["city"] == "충청남도") {
    cityConstant = 1;
  } else if (data["city"] == "경상북도") {
    cityConstant = 1;
  } else if (data["city"] == "경상남도") {
    cityConstant = 1;
  } else if (data["city"] == "전라북도") {
    cityConstant = 1;
  } else if (data["city"] == "전라남도") {
    cityConstant = 1;
  } else if (data["city"] == "제주도") {
    cityConstant = 2;
  }

  let areaConstant = 1;
  if (data["area"] == "50") {
    areaConstant = 165;
  } else if (data["area"] == "75") {
    areaConstant = 248;
  } else if (data["area"] == "100") {
    areaConstant = 330;
  } else if (data["area"] == "125") {
    areaConstant = 413;
  } else if (data["area"] == "150") {
    areaConstant = 496;
  } else if (data["area"] == "151") {
    areaConstant = 550;
  }

  let slopeConstant = 1;
  if (data["slope"] == "평평함") {
    slopeConstant = 0;
  } else if (data["slope"] == "조금경사짐") {
    slopeConstant = 1;
  } else if (data["slope"] == "많이경사짐") {
    slopeConstant = 1.5;
  }

  let roadConstant = 1;
  if (data["road"] == "넓음") {
    roadConstant = 1;
  } else if (data["road"] == "조금 좁음") {
    roadConstant = 1.5;
  } else if (data["road"] == "많이 좁음") {
    roadConstant = 2;
  }

  let building_area = Math.round(data["house"]?.["building_area"]);
  let final_price = Math.round(data["house"]?.["final_price"]/10000);
  let total_floor_area = data["house"]?.["total_floor_area"];




  let result = {
    price: [final_price],
    delivery: [Math.round((cityConstant * 200)*roadConstant), Math.round((cityConstant * 250)*roadConstant)],
    measure: [Math.round(((areaConstant/3.3)*0.3)+27), Math.round(((areaConstant/3.3)*0.4)+36)],
    permit: [systemConstant * total_floor_area * 20, systemConstant * total_floor_area * 50],
    grounding: [Math.round(((building_area/3.3)*50)*slopeConstant), Math.round(((building_area/3.3)*100))*slopeConstant],
    foundation: [Math.round((building_area/3.3)*100), Math.round((building_area/3.3)*150)],
    insurance: [100, 200],
    tax: [100, 200],
    total: [100, 200]
  };

  // Calculate tax[0] value
  result.tax[0] = 
    Math.round((result.price[0] + 
    result.delivery[0] + 
    result.measure[0] + 
    result.permit[0] + 
    result.grounding[0] +
    result.foundation[0] +
    result.insurance[0])*0.02)

  // Calculate tax[1] value
  result.tax[1] = 
    Math.round((result.price[0] + 
    result.delivery[1] + 
    result.measure[1] + 
    result.permit[1] + 
    result.grounding[1] +
    result.foundation[1] +
    result.insurance[1])*0.03)

   // Calculate total[0] value
   result.total[0] = 
      result.price[0] + 
      result.delivery[0] + 
      result.measure[0] + 
      result.permit[0] + 
      result.grounding[0] +
      result.foundation[0] +
      result.insurance[0] +
      result.tax[0];

    // Calculate total[0] value
   result.total[1] = 
      result.price[0] + 
      result.delivery[1] + 
      result.measure[1] + 
      result.permit[1] + 
      result.grounding[1] +
      result.foundation[1] +
      result.insurance[1] +
      result.tax[1];

  return result;
};
