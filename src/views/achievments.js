import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'


import Layout from '../layout'
import '../sass/explore.scss'

import CategoriesContent from '../components/CategoriesContent';
import { MakeMenu } from '../utils';



export default function Achievments() {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/categories')
        .then(res => {
          setCategories(res.data)
        })
        .catch(err => {
          setCategories(null)
        })
    }
    fetchData();
  }, [])



  return (
    <Layout>
      <div className="container">
        {categories && <MakeMenu categories={categories} />}
        <CategoriesContent />
      </div>

    </Layout>
  )
}