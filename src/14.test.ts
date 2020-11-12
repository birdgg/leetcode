import { longestCommonPrefix } from "./14"

test("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  expect(longestCommonPrefix([])).toBe("")
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  expect(longestCommonPrefix(["cir", "car"])).toBe("c")
})
