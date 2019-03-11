const binarySearch = require('../binary_search')

test('binary search success', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(binarySearch(list, 2)).toBe(1)
  expect(binarySearch(list, 6)).toBe(5)
  expect(binarySearch(list, 10)).toBe(9)
  expect(binarySearch(list, 11)).toBe(false)
})
