/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * dp[i][0] 第 i 天手里没有股票的最大收益
 * dp[i][1] 第 i 天手里有股票的最大收益
 *
 * dp[i][0] = Max{dp[i-1][0], dp[i-1][1] + prices[i]}
 * dp[i][1] = Max{dp[i-1][0] - prices[i], dp[i-1][1]}
 *
 * dp[0][0] = 0, dp[0][1] = -prices[0]
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const length = prices.length
  const dp: number[][] = new Array(length)
    .fill(0)
    .map((_) => new Array(2).fill(0))

  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
  }
  return dp[length - 1][0]
}
// @lc code=end

// 贪心
function maxProfit2(prices: number[]): number {
  const length = prices.length
  let max = 0
  for (let i = 1; i < length; ++i) {
    max += Math.max(0, prices[i] - prices[i - 1])
  }
  return max
}

export { maxProfit, maxProfit2 }
