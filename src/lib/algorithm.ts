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
  } else if (data["slope"] == "조금 경사짐") {
    areaConstant = 1;
  } else if (data["slope"] == "많이 경사짐") {
    areaConstant = 1.5;
  }

  let result = {
    delivery: [cityConstant * 200, cityConstant * 280],
    permit: [systemConstant * 800, systemConstant * 1200],
    measure: [areaConstant * 3, areaConstant * 4],
    grounding: [areaConstant * 50, areaConstant * 100],
    foundation: [100, 200],
    insurance: [100, 200],
    tax: [100, 200],
    total: [100, 200],
  };
  return result;
};
