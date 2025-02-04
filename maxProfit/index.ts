// [7,1,5,3,6,4]
function maxProfile(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let buy = prices[0];
  let diff = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      continue;
    }

    const currDiff = prices[i] - buy;
    if (currDiff > diff) {
      diff = currDiff;
    }
  }

  return diff;
}

const x = maxProfile([7, 1, 5, 3, 6, 4]);

console.log(x);
