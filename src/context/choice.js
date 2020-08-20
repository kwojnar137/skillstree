import React, { useState, createContext, useContext } from 'react'

// export const ChoiceContext = createContext()


const ChoiceStateContext = React.createContext()
const ChoiceSetContext = React.createContext()



// export function useChoice() {

//   function updateChoice(newChoice) {
//     setChoice(newChoice)
//   }

//   const { choice, updateChoice } = useContext(ChoiceContext)
//   const [choice, setChoice] = useState(null)
//   return { choice, updateChoice }
// }

function useChoiceState() {
  const context = React.useContext(ChoiceStateContext)
  if (context === undefined) {
    throw new Error('Can\'t find choice')
  }
  return context
}

function useChoiceSet() {
  const context = React.useContext(ChoiceSetContext)
  if (context === undefined) {
    throw new Error('Can\'t set choice')
  }
  return context
}


function ChoiceProvider({ children }) {
  const [choice, setChoice] = React.useState({ choice: 0 })
  return (
    <ChoiceStateContext.Provider value={choice}>
      <ChoiceSetContext.Provider value={setChoice}>
        {children}
      </ChoiceSetContext.Provider>
    </ChoiceStateContext.Provider>
  )
}


export { ChoiceProvider, useChoiceState, useChoiceSet }
