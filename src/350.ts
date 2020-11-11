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

export { intersect }
