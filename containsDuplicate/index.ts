function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}



const x = containsDuplicate([1,2,3,1,4])

console.log(x)
