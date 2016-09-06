import utils from './utils'

const replaceTdotFalse = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'false'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.false(expected)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(expectationExpression.value.arguments[0])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      [j.identifier(actualValue)]
    )
    const newActual = j.callExpression(
      j.identifier('toBe'),
      [j.identifier('false')]
    )
    const newExpression = j.memberExpression(
      newExpect, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotFalse