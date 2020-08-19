import React, { useState } from 'react'


function Childrens({ parentID, famillyArray }) {
  const [whichHover, setWhichHover] = useState(null)

  function handleLeave(e) {
    setWhichHover(null)
  }

  function findChildren(event) {
    setWhichHover(event.target.id)
  }

  const parent = famillyArray.find((member) => {
    return (parseInt(member.id) === parseInt(parentID))
  })

  if (parent != null) {
    return <div className="childrens">
      {parent.childrens.map((child, id) => (
        <div className="child paper" key={id} id={child.id} onMouseEnter={(event) => findChildren(event)} onMouseLeave={(e) => handleLeave(e)}>
          {child.name}
          {parseInt(whichHover) === parseInt(child.id) ? <><Childrens parentID={whichHover} famillyArray={parent.childrens} /> </> : null}
        </div>
      ))}
    </div>
  }
  return null
}



export default function DropdownMenu({ famillyArray }) {
  const [whichHover, setWhichHover] = useState(null)

  function findChildren(e) {
    setWhichHover(e.target.id)
  }

  function handleLeave(e) {
    setWhichHover(null)
  }

  return (
    <div className="menu paper"
      onMouseLeave={(e) => handleLeave(e)}>
      <div className="menuMainCard">
        {
          famillyArray.map((category, id) => (
            <div
              className={parseInt(whichHover) === parseInt(category.id) ? 'mainCategory paper focused' : 'mainCategory paper'}
              id={category.id}
              key={id}
              onMouseEnter={(e) => findChildren(e)}
            >
              {category.name}
            </div>
          ))
        }
      </div>
      <Childrens parentID={whichHover} famillyArray={famillyArray} />
    </div>
  )
}
