function climbStairs1(n: number): number {
    if (n <= 0) {
        return n;
    }
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n + 1];
}

function climbStairs(n: number): number {
    if (n <= 0) {
        return n;
    }

    let prev1 = 0,
        prev2 = 1;

    for (let i = 0; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
        console.log(curr);
    }

    return prev1;
}

console.log(climbStairs(44));
