test('expected literal', () => {
  const abc = 'a' + 'b' + 'c'
  expect(abc).toBe('abc')
})

test('expected literal without arrow function parameter brackets', () => {
  const abc = 'a' + 'b' + 'c'
  expect(abc).toBe('abc')
})

test('expected variable', () => {
  const abc = 'a' + 'b' + 'c'
  const expected = 'abc'
  expect(abc).toBe(expected)
})
