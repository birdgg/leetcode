import { intersect2 } from "./350"

test("intersect2", () => {
  expect(intersect2([1, 2, 3, 4, 5], [1, 1, 2, 3, 5])).toStrictEqual([
    1,
    2,
    3,
    5,
  ])
})
