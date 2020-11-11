import { intersect } from "./350"

test("350", () => {
  expect(intersect([1, 2, 3], [2, 2, 3])).toStrictEqual([2, 3])
})
