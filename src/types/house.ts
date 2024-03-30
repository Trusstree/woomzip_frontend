export type specificityInfoType = {
  default: Array<string>
  etc : string
}

export type HouseInfoType = {
  house_name: string
  house_explanation: string
  floor: number
  building_area: number
  total_floor_area: number
  room_count: number
  toilet_count: number
  estimate_duration: number
  warranty: string
  has_model: boolean
  base_price: number
  discount_rate: number
  price_variation: string
  specificity_info: specificityInfoType
}

export type specificationInfoType = {
  framework: specificityInfoType
  exterior_material : specificityInfoType
  roofing_material : specificityInfoType
  insulation_material : specificityInfoType
  interior_material : specificityInfoType
  window : specificityInfoType
  heating : specificityInfoType
  furniture : specificityInfoType
  toilet : specificityInfoType
  kitchen : specificityInfoType
  lighting : specificityInfoType
  etc_info: string
  specification_description: string
}