import utils from './utils'

const replaceTdotTruthy = (j, root) => {
  const tDotIs = root.find(j.MemberExpression, {
    object: {
      name: 't'
    },
    property: {
      name: 'truthy'
    }
  })
  tDotIs.forEach(expectation => {
    // Get the entire 't.truthy(expected)' expression
    const expectationExpression = expectation.parentPath
    const actualValue = utils.getValue(expectationExpression.value.arguments[0])
    const newExpect = j.callExpression(
      j.identifier('expect'),
      [j.identifier(actualValue)]
    )
    const newActual = j.callExpression(
      j.identifier('toBeTruthy'),
      []
    )
    const newExpression = j.memberExpression(
      newExpect, newActual
    )
    expectationExpression.replace(newExpression)
  })
}

export default replaceTdotTruthy