export function makeFamilly({ categories }) {

  const familly = categories.filter((member) => {
    return member.parentId === null
  })

  function fillFamillyArray(familly) {
    familly.forEach((member) => {
      const childrens = categories.filter(child => { return child.parentId === member.id })
      Object.assign(member, { childrens: childrens })
      fillFamillyArray(childrens)
    })
  }
  fillFamillyArray(familly)


  return familly
}

// export function findChildrensId(famillyPart, choice, founded = false) {
//   console.log({ famillyPart }, { choice })

//   return famillyPart.map((member) => {
//     if (member.id === choice || founded) {
//       return [member.id].concat(findChildrensId(member.childrens, true))
//     } else {
//       return findChildrensId(member.childrens)
//     }
//   }).flat(Infinity)
// }



export function trim(toTrim, { size = 120 }) {
  toTrim = toTrim.slice(0, size)
  toTrim = toTrim + '...'

  return toTrim
}