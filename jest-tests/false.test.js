test('expected variable false', () => {
  const abc = false
  expect(abc).toBe(false)
})

test('expected variable math calculation', () => {
  const abc = 1 > 2
  expect(abc).toBe(false)
})
