function climbStairs(n: number): number {
  if (n <= 0) return n;
  const sqrt5 = Math.sqrt(5);
  return ((1 + sqrt5) ** n - (1 - sqrt5) ** n) / (2 ** n * sqrt5);
}

console.log(climbStairs(44))
