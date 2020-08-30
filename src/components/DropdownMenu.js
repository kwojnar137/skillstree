import React, { useState } from 'react'
import { useChoiceState, useChoiceSet } from '../context/choice'

function Childrens({ parentID, famillyArray }) {
  const { choice } = useChoiceState()
  const setChoice = useChoiceSet()

  const [whichHover, setWhichHover] = useState(null)


  function handleChoice(id) {
    console.log('handleChoice id: ', id)
    setChoice({ choice: id })
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
          onClick={() => handleChoice(child.id)}

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
  // const { choice, updateChoice } = useChoice()
  const setChoice = useChoiceSet()

  function handleChoice(id) {
    console.log({ id })
    setChoice({ choice: id })
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
              onClick={() => handleChoice(category.id)}
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
