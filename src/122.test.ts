import { maxProfit, maxProfit2 } from "./122"

test("dp", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})

test("greedy", () => {
  expect(maxProfit2([7, 1, 5, 3, 6, 4])).toBe(7)
  expect(maxProfit2([1, 2, 3, 4, 5])).toBe(4)
  expect(maxProfit2([7, 6, 4, 3, 1])).toBe(0)
})
