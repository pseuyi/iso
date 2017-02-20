const spruce = (str) => {
    let temp = document.createElement('div')
    temp.innerHTML = str.trim()
    return format(temp, 0).innerHTML
}

const format = (node, level) => {
  let indent = '\n'
  for(var j=level; j>0; j--) {
    indent += ' '
  }
  for (var i = 0; i< node.children.length; i++) {
    let textnode = document.createTextNode(indent)
    node.insertBefore(textnode, node.children[i])
    format(node.children[i], level+1)
    if (i===node.children.length-1) {
      let last = document.createTextNode(indent.slice(0, indent.length-1))
      node.appendChild(last)
    }
  }
  return node
}

export default spruce
