import utils from './utils'

const replaceAfterEach = (j, root) => {
  const afterEach = root.find(j.MemberExpression, {
    object: {
      name: 'test'
    },
    property: {
      name: 'afterEach'
    }
  })
  afterEach.forEach(node => {
    // Get the entire 'test.afterEach([title], implementation)' expression
    const expression = node.parentPath
    const implementation = expression.value.arguments.length > 1
      ? expression.value.arguments[1]
      : expression.value.arguments[0]

    const newExpression = j.callExpression(
      j.identifier('afterEach'),
      [implementation]
    )

    expression.replace(newExpression)
  })
}

export default replaceAfterEach
