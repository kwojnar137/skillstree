import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Layout from '../layout'
import '../sass/explore.scss'

import CoursesContent from './CoursesContent';
import DropdownMenu from '../components/DropdownMenu'

import { makeFamilly } from '../utils';
import { ChoiceProvider } from '../context/choiceContext'

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
      const famillyFromCategories = makeFamilly(categories)
      setFamilly(famillyFromCategories)
    }
  }, [categories])





  return (
    <Layout>
      <div className="container">
        <ChoiceProvider>
          {familly && <div className='menuContainer'> <DropdownMenu famillyArray={familly} /> </div>}
          {familly && <CoursesContent familly={familly} />}
        </ChoiceProvider>
      </div>

    </Layout>
  )
}