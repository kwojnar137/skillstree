import React, { useState } from 'react'
import { useChoiceState, useChoiceSet } from '../context/choiceContext'

function Childrens({ parentID, famillyArray }) {
  const { choice } = useChoiceState()
  const setChoice = useChoiceSet()

  const [whichHover, setWhichHover] = useState(null)


  function handleChoice(id) {
    setChoice({ choice: parseInt(id) })
  }


  function handleLeave() {
    setWhichHover(null)
  }

  function findChildren(id) {
    setWhichHover(id)
  }

  const parent = famillyArray.find((member) => {
    return (parseInt(member.id) === parseInt(parentID))
  })

  if (parent != null) {
    return <div className="childrens">
      {parent.childrens.map((child, id) => (
        <div
          className="child paper"
          key={id} id={child.id}
          onMouseEnter={() => findChildren(child.id)}
          onMouseLeave={() => handleLeave(child.id)}
          onClick={(e) => handleChoice(e.target.id)}

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

  function handleChoice(e) {
    setChoice({ choice: parseInt(e.target.id) })
  }

  function findChildren(id) {
    setWhichHover(id)
  }

  function handleLeave() {
    setWhichHover(null)
  }

  return (
    <div className="menu paper"
      onMouseLeave={() => handleLeave()}>
      <div className="menuMainCard">
        {
          famillyArray.map((category, id) => (
            <div
              className={parseInt(whichHover) === parseInt(category.id) ? 'mainCategory paper focused' : 'mainCategory paper'}
              id={category.id}
              key={id}
              onClick={(e) => handleChoice(e)}
              onMouseEnter={() => findChildren(category.id)}
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
