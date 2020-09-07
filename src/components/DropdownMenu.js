import React, { useState } from 'react'
import { useChoiceSet } from '../context/choiceContext'

function Childrens({ parentID, famillyArray }) {
  const setChoice = useChoiceSet()
  const [whichHover, setWhichHover] = useState(null)

  const parent = famillyArray.find((member) => {
    return (parseInt(member.id) === parseInt(parentID))
  })


  if (parent != null) {
    return <div className="childrens">
      {parent.childrens.map((child, id) => (
        <div
          className="child paper"
          key={id} id={child.id}
          onMouseEnter={() => setWhichHover(child.id)}
          onMouseLeave={() => setWhichHover(child.id)}
          onClick={(e) => setChoice({ choice: parseInt(e.target.id) })}
        >
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
  const setChoice = useChoiceSet()

  return (
    <div className="menu paper"
      onMouseLeave={() => setWhichHover(null)}>
      <div className="menuMainCard">
        {
          famillyArray.map((category, id) => (
            <div
              className={parseInt(whichHover) === parseInt(category.id) ? 'mainCategory paper focused' : 'mainCategory paper'}
              id={category.id}
              key={id}
              onClick={(e) => setChoice({ choice: parseInt(e.target.id) })}
              onMouseEnter={() => setWhichHover(category.id)}
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