import React, { useState, useEffect } from 'react'
import DropdownMenu from './components/DropdownMenu'



export function MakeMenu({ categories }) {

  const familly = categories.filter((member) => {
    return member.parentid === null
  })

  function fillFamillyArray(familly) {
    familly.forEach((member, id) => {
      const childrens = categories.filter(child => { return child.parentid === member.id })
      Object.assign(member, { childrens: childrens })
      fillFamillyArray(childrens)
    })
  }

  fillFamillyArray(familly)



  return (
    <div className='menuContainer'>
      <DropdownMenu famillyArray={familly} />
    </div>
  )

}