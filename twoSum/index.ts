type Value = number;
type Index = number;

export function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) return [];
  if (nums.length >= Number.MAX_VALUE) return [];

  const map = new Map<Value, Index>();
  let returnArr: number[] = [];

  nums.map((n, i) => {
    const neededNumber = target - n;
    if (map.has(neededNumber)) {
      returnArr = [map.get(neededNumber)!, i];
    }
    map.set(n, i);
  });

  return returnArr;
}
