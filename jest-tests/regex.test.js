test('expected literal', () => {
  const abc = 'abc'
  expect(abc).toMatch(/abc/)
})

test('expected variable', () => {
  const abc = 'a' + 'b' + 'c'
  const expected = /abc/
  expect(abc).toMatch(expected)
})
