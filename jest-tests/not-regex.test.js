test('expected literal', () => {
  const abc = 'abc'
  expect(abc).not.toMatch(/xyz/)
})

test('expected variable', () => {
  const abc = 'a' + 'b' + 'c'
  const expected = /xyz/
  expect(abc).not.toMatch(expected)
})
