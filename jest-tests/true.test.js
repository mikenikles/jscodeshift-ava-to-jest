test('expected variable true', () => {
  const abc = true
  expect(abc).toBe(true)
})

test('expected variable math calculation', () => {
  const abc = 2 > 1
  expect(abc).toBe(true)
})
