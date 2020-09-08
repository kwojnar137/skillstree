export function makeFamilly(categories) {

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


export function findChildrensId(famillyPart, choice, founded = false) {
  return famillyPart.map((member) => {
    if (member.id === choice || founded) {
      return [member.id].concat(findChildrensId(member.childrens, choice, true))
    } else {
      return findChildrensId(member.childrens, choice)
    }
  }).flat(Infinity)
}


export function trim(toTrim, { size = 120 }) {
  toTrim = toTrim.slice(0, size)
  toTrim = toTrim + '...'

  return toTrim
}

export function messegeFromStatus(status) {

  switch (true) {
    case status === 400:
      return "Client error: bad request. Try again"
      break;
    case status === 401:
      return "Client error: You are unathorized"
      break;
    case status === 404:
      return "Client error: Server couldn't find what you want"
      break;
    case status === 408:
      return "Client error: Request timeout"
      break;
    case status === 429:
      return "Client error: Too many requests"
      break;
    case (status >= 430 && status < 499):
      return "Unidentified client error. Conntact with our support"
      break;
    case status === 500:
      return "Internal Server Error. Try again later"
      break;
    case status === 503:
      return "Internal Server Error. Server is down or overloaded. Try again later"
      break;
    case (status >= 504 && status < 599):
      return "Unidentified server error. Conntact with our support"
      break;
    default:
      return "OK"
  }
}