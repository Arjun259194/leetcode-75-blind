export function productExceptSelf(nums: number[]): number[] {
  const output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let ii = 0; ii < nums.length; ii++) {
      if (ii !== i) {
        product *= nums[ii];
      }
    }
    output.push(product);
  }
  return output;
}

// Recursion solution
export function productExceptSelf2(nums: number[]): number[] {
  const helper = (skipIndex = 0): number[] => {
    if (skipIndex > nums.length - 1) {
      return [];
    }

    let prod = 1;

    for (let i = 0; i < nums.length; i++) {
      if (i === skipIndex) continue;
      prod *= nums[i];
    }

    return [prod].concat(helper(skipIndex + 1));
  };

  return helper();
}



export function productExceptSelf3(nums: number[]): number[] {

}

const x = productExceptSelf3([1, 2, 3]);
console.log(x);
















