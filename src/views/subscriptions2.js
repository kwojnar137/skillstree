import React, { useEffect, useState, useMemo } from 'react'
import Layout from '../layout'

import axios from 'axios';

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
  // console.log(isShown)
  // const [showSubmenu, setShowSubmenu] = useState(false)

  // function handleClick() {
  //   setShowSubmenu(!showSubmenu)
  // }

  // console.log('showSubmenu: ', showSubmenu)



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
        <SubCategories subCategory={item} />
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
  const [isShown, setIsShown] = useState(false);

  const categories = useMemo(() => {
    return data.map((item, id) => (
      <div key={`categories-${id}`}>
        <Tabs tab={item} id={id} />
      </div>
    ))
  }, [data])


  return (
    <div className="categories paper"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {categories}
      {/* <SubCategoryMenu /> */}
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














export default function Subscriptions() {
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

  // {users.map(user => <li key={user}>{user}</li>)}

  const categories = useMemo(() => {
    if (data != null) {
      return data.map((el, index) => {
        <div key={`categoryTab-${index}`}>
          <Category> {el.categories} </Category>
          <SubCategories subcategories={el.subcategories} category={el.categories} />
        </div>

      })
    }
    return null
  }, [data])


  return (
    <Layout>
      <div className="achievmentsContaier">
        {data && categories}
        {/* {data != null && (<Categories data={data} />)} */}

        {/* <SubCategoryMenu /> */}
        <CategoriesContent />


      </div>
    </Layout>
  )
}

