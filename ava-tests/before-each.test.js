import test from 'ava'

let count = 0

test.beforeEach(() => {
  count += 1
})

test('beforeEach has run', (t) => {
  t.is(count, 1)
})

test('beforeEach has run', (t) => {
  t.is(count, 2)
})
