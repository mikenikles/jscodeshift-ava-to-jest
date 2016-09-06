const getValue = (node) => {
  switch (node.type) {
    case 'Literal':
      return node.raw
    case 'Identifier':
      return node.name
    case 'ObjectExpression':
      return node.properties
    default:

  }
}

export default {
  getValue
}