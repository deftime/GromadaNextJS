export function sortByDate(arr: { date: string }[]): any[] {
  const sortArr = arr.sort((dateA, dateB)=>{
    let a = Date.parse(dateA.date.split('.').reverse().join('-'));
    let b = Date.parse(dateB.date.split('.').reverse().join('-'));
    return b - a;
  })
  return sortArr;
}