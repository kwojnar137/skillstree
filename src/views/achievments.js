import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios';
// import styled from 'styled-components'


import Layout from '../layout'
import '../sass/explore.scss'

import Content from '../components/Content';
import DropdownMenu from '../components/DropdownMenu'

import { MakeFamilly } from '../utils';



export const ChoiceContext = createContext({})
export function useChoice() {
  const { choice, updateChoice } = useContext(ChoiceContext)
  return { choice, updateChoice }
}


export default function Achievments() {
  const [categories, setCategories] = useState(null)
  const [choice, setChoice] = useState(null)
  const [familly, setFamilly] = useState(null)

  function updateChoice(newChoice) {
    setChoice(newChoice)
  }


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/categories')
        setCategories(res.data)
      } catch (err) {
        setCategories(null)
      }
    }
    fetchData();
  }, [])


  useEffect(() => {
    if (categories) {
      const famillyFromCategories = MakeFamilly({ categories })
      setFamilly(famillyFromCategories)
    }
  }, [categories])


  return (
    <Layout>
      <div className="container">
        <ChoiceContext.Provider
          value={{
            choice,
            updateChoice
          }}
        >
          {/* {categories && <MakeFamilly categories={categories} familly={familly} setFamilly={setFamilly} />} */}
          {familly && <div className='menuContainer'> <DropdownMenu famillyArray={familly} /> </div>}
          {familly && <Content choice={choice} familly={familly} />}
        </ChoiceContext.Provider>
      </div>

    </Layout>
  )
}