export function sortByOrder(arr: { order: number }[]): any[] {
  const sortArr = arr.sort((orderA, orderB)=> orderA.order - orderB.order);
  return sortArr;
}