import test from 'ava'

test('expected variable false', (t) => {
  const abc = false
  t.falsy(abc)
})

test('expected variable 0', (t) => {
  const abc = 0
  t.falsy(abc)
})

test('expected variable empty string', (t) => {
  const abc = ''
  t.falsy(abc)
})

test('expected variable null', (t) => {
  const abc = null
  t.falsy(abc)
})

test('expected variable undefined', (t) => {
  const abc = undefined
  t.falsy(abc)
})

test('expected variable NaN', (t) => {
  const abc = NaN
  t.falsy(abc)
})
