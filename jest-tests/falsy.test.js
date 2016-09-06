test('expected variable false', () => {
  const abc = false
  expect(abc).toBeFalsy()
})

test('expected variable 0', () => {
  const abc = 0
  expect(abc).toBeFalsy()
})

test('expected variable empty string', () => {
  const abc = ''
  expect(abc).toBeFalsy()
})

test('expected variable null', () => {
  const abc = null
  expect(abc).toBeFalsy()
})

test('expected variable undefined', () => {
  const abc = undefined
  expect(abc).toBeFalsy()
})

test('expected variable NaN', () => {
  const abc = NaN
  expect(abc).toBeFalsy()
})
