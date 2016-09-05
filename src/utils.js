const getValue = (node) => {
  switch (node.type) {
    case 'Literal':
      return node.raw
    case 'Identifier':
      return node.name
    default:

  }
}

export default {
  getValue
}