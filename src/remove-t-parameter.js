const _removeTParameter = testFunction => {
  testFunction.value.arguments.forEach(argument => {
    if (argument.type === 'ArrowFunctionExpression') {
      // Drop the 't' parameter for AVA's arrow function
      argument.params = []
    }
  })
}

const removeTParameter = (j, root) => {
  const testFunctions = root.find(j.CallExpression, {
      callee: {
        name: 'test'
      }
    })
    testFunctions.forEach(_removeTParameter)
}

export default removeTParameter