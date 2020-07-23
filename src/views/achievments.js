import React from 'react'
import Layout from '../layout'


const Categories = () => {
  return (
    <div className="categories paper">

    </div>
  )
}

const CategoriesCard = () => {
  return (
    <div className="categoriesCard paper">

    </div>
  )
}


const CategoriesContent = () => {
  return (
    <div className="categoriesContent">
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
      <CategoriesCard />
    </div>
  )
}



export default function Achievments() {
  return (
    <Layout>
      <div className="achievmentsContaier">
        <Categories />
        <CategoriesContent />
      </div>

    </Layout>
  )
}