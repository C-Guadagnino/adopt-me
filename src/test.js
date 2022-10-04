const names = ['sina', 'sam', 'cam', 'josh', 'ben']

names.filter(isNotQ)
names.filter(isMin5)
names.map(convertToEl)

function isNotQ(n) {
  return n[0] !== 'Q'
}

function isMin5(n) {
  return n.length >= 5
}

function convertToEl(n) {
  const ele = document.createElement('p')
  ele.innerText = n
  return ele
}
