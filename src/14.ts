/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function commonPrefix(s1: string, s2: string): string {
  let prefix = ""
  const length = Math.min(s1.length, s2.length)
  for (let index = 0; index < length; index++) {
    if (s1[index] === s2[index]) {
      prefix += s1[index]
    } else {
      break
    }
  }
  return prefix
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ""

  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    prefix = commonPrefix(prefix, strs[i])
  }

  return prefix
}
// @lc code=end

export { longestCommonPrefix }
