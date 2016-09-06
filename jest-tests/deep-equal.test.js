test('expected object literal', () => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  expect(abc).toEqual({
    a: 'a',
    b: 'b',
    c: 'c'
  })
})

test('expected object variable', () => {
  const abc = { a: 'a', b: 'b', c: 'c' }
  const expected = { a: 'a', b: 'b', c: 'c' }
  expect(abc).toEqual(expected)
})
