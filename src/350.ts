/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const numMap: Record<number, number> = {}
  const union: number[] = []
  nums1.forEach((num) => {
    if (!numMap[num]) {
      numMap[num] = 1
    } else {
      numMap[num] += 1
    }
  })

  nums2.forEach((num) => {
    if (numMap[num] && numMap[num] > 0) {
      numMap[num] -= 1
      union.push(num)
    }
  })

  return union
}

/**
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 */
function intersect2(nums1: number[], nums2: number[]): number[] {
  let i = 0,
    j = 0
  const union: number[] = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      union.push(nums1[i])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      i++
    }
  }

  return union
}

export { intersect2, intersect }
