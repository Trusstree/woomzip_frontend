export const arraySort = (arr: Array<number | string>) => {
  if (!arr?.length) return arr;
  if (arr.length == 0) return "";
  if (typeof arr[0] == "string") return arr.sort().join(",");
  return arr.sort((a: number, b: number) => a - b).join("");
};
