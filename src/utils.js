export function makeFamilly(categories) {
  const familly = categories.filter((member) => {
    return member.parentId === null;
  });

  function fillFamillyArray(familly) {
    familly.forEach((member) => {
      const childrens = categories.filter((child) => {
        return child.parentId === member.id;
      });
      Object.assign(member, { childrens: childrens });
      fillFamillyArray(childrens);
    });
  }
  fillFamillyArray(familly);

  return familly;
}

export function findChildrensId(famillyPart, choice, founded = false) {
  return famillyPart
    .map((member) => {
      if (member.id === choice || founded) {
        return [member.id].concat(
          findChildrensId(member.childrens, choice, true)
        );
      } else {
        return findChildrensId(member.childrens, choice);
      }
    })
    .flat(Infinity);
}

export function trim(toTrim, { size = 120 }) {
  toTrim = toTrim.slice(0, size);
  toTrim = toTrim + "...";

  return toTrim;
}

export function messageFromStatus(status) {
  switch (true) {
    case status === 400:
      return {
        message: "Client error: bad request. Try again",
        variant: "warning",
      };
      break;
    case status === 401:
      return {
        message: "Client error: You are unathorized",
        variant: "warning",
      };
    case status === 404:
      return {
        message: "Client error: Server couldn't find what you want",
        variant: "warning",
      };

    case status === 408:
      return { message: "Client error: Request timeout", variant: "danger" };

    case status === 429:
      return { message: "Client error: Too many requests", variant: "danger" };

    case status >= 430 && status < 499:
      return {
        message: "Unidentified client error. Conntact with our support",
        variant: "warning",
      };

    case status === 500:
      return {
        message: "Internal Server Error. Try again later",
        variant: "danger",
      };

    case status === 503:
      return {
        message:
          "Internal Server Error. Server is down or overloaded. Try again later",
        variant: "warning",
      };

    case status >= 504 && status < 599:
      return {
        message: "Unidentified server error. Conntact with our support",
        variant: "warning",
      };

    default:
      return { message: "OK", variant: "info" };
  }
}

// export function messageFromStatus(status) {

//   switch (true) {
//     case status === 400:
//       return {message: "Client error: bad request. Try again" , variant: "danger"}
//       ;
//     case status === 401:
//       return "Client error: You are unathorized"
//       ;
//     case status === 404:
//       return "Client error: Server couldn't find what you want"
//       ;
//     case status === 408:
//       return "Client error: Request timeout"
//       ;
//     case status === 429:
//       return "Client error: Too many requests"
//       ;
//     case (status >= 430 && status < 499):
//       return "Unidentified client error. Conntact with our support"
//       ;
//     case status === 500:
//       return "Internal Server Error. Try again later"
//       ;
//     case status === 503:
//       return "Internal Server Error. Server is down or overloaded. Try again later"
//       ;
//     case (status >= 504 && status < 599):
//       return "Unidentified server error. Conntact with our support"
//       ;
//     default:
//       return "OK"
//   }
// }
