class Solution(object):
    def climbStairs(self, n):
        if n <= 0:
            return n
        i, a, b = 1, 0, 1
        while i <= n:
            b, a = a + b, b
            i += 1
        return b


x = Solution().climbStairs(44)
print(f"result is {x}")
