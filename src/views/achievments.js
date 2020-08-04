import React, { useEffect, useState, useMemo } from 'react'
import Layout from '../layout'

import axios from 'axios';


// Wyciągnięcie podmenu
// const multiSubCategory = useMemo(() => {
//   if (typeof (subCategory) === 'object') {
//     console.log('subCategory object: ', Object.values(subCategory))
//     return Object.values(subCategory).map((element) => (
//       <>{element}</>
//     ))
//   }
//   return subCategory
// }, [subCategory])

function SubMenu({ elements }) {

  const elementsToShow = useMemo(() => {
    return elements.map((element, id) => (
      <div className="subcategoryMenuElement" key={`subcategoryMenuElement-${id}`}>
        {element}
      </div>
    ))
  }, [elements])


  return (
    <div className="subcategoryMenu paper">
      {elementsToShow}
    </div>
  )

}


function SubCategories({ subCategory, id }) {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown)
  // const [showSubmenu, setShowSubmenu] = useState(false)

  // function handleClick() {
  //   setShowSubmenu(!showSubmenu)
  // }

  // console.log('showSubmenu: ', showSubmenu)

  const isObject = (typeof (subCategory) === 'object')

  const subCategoryTab = useMemo(() => {
    if (typeof (subCategory) === 'object') {
      const subCategoryArray = Object.entries(subCategory)
      const subcategoryName = subCategoryArray[0][0]
      const subcategoryElements = subCategoryArray[0][1]

      return (
        <>
          {subcategoryName} ({subcategoryElements.length})
          <SubMenu elements={subcategoryElements} />
        </>
      )
    }
    return subCategory
  }, [subCategory])


  return (
    <>
      {
        isObject &&
        <div className="multiple"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {subCategoryTab}
        </div>
      }

      {
        !isObject &&
        <div className="single">
          {subCategoryTab}
        </div>
      }
    </>
  )
}

function Tabs({ tab, id }) {
  const subcategories = useMemo(() => {
    return tab.subcategories.map((item, id) => (
      <div className="subCategoryElement" key={`subcategory-${id}`}>
        <SubCategories subCategory={item}></SubCategories>
      </div>
    ))
  }, [tab])


  return (
    <div className="tabs">
      <div className="categoryName">
        {tab.categories}
      </div>
      <div className="subcategoriesContainer">
        {subcategories}
      </div>
    </div>
  )
}


const Categories = ({ data }) => {

  const categories = useMemo(() => {
    return data.map((item, id) => (
      <div key={`categories-${id}`}>
        <Tabs tab={item} id={id} />
      </div>
    ))
  }, [data])


  return (
    <div className="categories paper" >
      {categories}
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
  const [data, setData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      axios.get('/categories')
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          setData('uh oh error!')
        })
    }
    fetchData();
  }, [])

  return (
    <Layout>
      <div className="achievmentsContaier">
        {data != null && (<Categories data={data} />)}
        <CategoriesContent />
      </div>
    </Layout>
  )
}