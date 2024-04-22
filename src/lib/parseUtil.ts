export const parseSpecificationInfo = (data: string):{} => {
  return Object.fromEntries(Object.entries(JSON.parse(data)).map(([key, value])=>(
    [key,value["default"]?`${value["default"].join(", ")}${value["etc"]?`, ${value["etc"]}`:""}`:value["etc"]])) // 하나하나 parse해서 배열에 집어넣음
  )
}