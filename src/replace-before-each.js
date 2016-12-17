import utils from './utils'

const replaceBeforeEach = (j, root) => {
  const beforeEach = root.find(j.MemberExpression, {
    object: {
      name: 'test'
    },
    property: {
      name: 'beforeEach'
    }
  })
  beforeEach.forEach(node => {
    // Get the entire 'test.beforeEach([title], implementation)' expression
    const expression = node.parentPath
    const implementation = expression.value.arguments.length > 1
      ? expression.value.arguments[1]
      : expression.value.arguments[0]

    const newExpression = j.callExpression(
      j.identifier('beforeEach'),
      [implementation]
    )

    expression.replace(newExpression)
  })
}

export default replaceBeforeEach
