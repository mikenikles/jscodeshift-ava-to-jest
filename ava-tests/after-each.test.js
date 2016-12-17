import test from 'ava'

let count = 0

test.afterEach(() => {
  count += 1
})

test('afterEach has run', (t) => {
  t.is(count, 0)
})

test('afterEach has run', (t) => {
  t.is(count, 1)
})

test('afterEach has run', (t) => {
  t.is(count, 2)
})
