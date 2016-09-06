test('expected literal', () => {
  const abc = 'a' + 'b' + 'c'
  expect(abc).not.toBe('xyz')
})

test('expected variable', () => {
  const abc = 'a' + 'b' + 'c'
  const expected = 'xyz'
  expect(abc).not.toBe(expected)
})
