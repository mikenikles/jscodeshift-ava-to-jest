test('expected object literal', () => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  expect(abc).not.toEqual({
    a: 'x',
    b: 'y',
    c: 'z'
  })
})

test('expected object variable', () => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  const expected = { a: 'x', b: 'y', c: 'z' }
  expect(abc).not.toEqual(expected)
})
