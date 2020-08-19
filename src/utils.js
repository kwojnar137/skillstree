export function MakeFamilly({ categories }) {


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