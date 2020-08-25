import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios';

import Layout from '../layout'
import '../sass/explore.scss'

import Content from '../components/Content';
import DropdownMenu from '../components/DropdownMenu'

import { makeFamilly } from '../utils';
import { ChoiceProvider } from '../context/choice'




export default function Achievments() {
  const [categories, setCategories] = useState(null)
  const [familly, setFamilly] = useState(null)




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
      const famillyFromCategories = makeFamilly({ categories })
      console.log({ famillyFromCategories })
      setFamilly(famillyFromCategories)
    }
  }, [categories])





  return (
    <Layout>
      <div className="container">
        <ChoiceProvider>
          {familly && <div className='menuContainer'> <DropdownMenu famillyArray={familly} /> </div>}
          {familly && <Content familly={familly} />}
        </ChoiceProvider>
      </div>

    </Layout>
  )
}