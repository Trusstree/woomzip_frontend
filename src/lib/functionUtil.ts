export const arraySort = (arr: Array<number | string>) => {
  if (!arr?.length) return "";
  if (typeof arr[0] == "string") return arr.sort().join(",");
  return arr.sort((a: number, b: number) => a - b).join("");
};

export const arrayMin = (arr: Array<number>) => {
  if (!arr?.length) return "";
  return Math.min(...arr).toString();
};
