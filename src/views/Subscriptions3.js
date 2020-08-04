import React, { useEffect, useState, useMemo } from 'react'
import Layout from '../layout'

import axios from 'axios';
import { SubCategoryMenu } from '../components/SubCategoryMenu';




export function SubCategories({ subCategory, category, onMouseEnter }) {
  // console.log('subCategory: ', subCategory)

  const isObject = (typeof (subCategory) === 'object')

  const subCategoryTab = useMemo(() => {
    if (typeof (subCategory) === 'object') {
      const subCategoryArray = Object.entries(subCategory)
      const subcategoryName = subCategoryArray[0][0]
      const subcategoryElements = subCategoryArray[0][1]

      return (
        <>
          {subcategoryName} ({subcategoryElements.length})
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
  const [whichHover, setWhichHover] = useState(null)
  console.log('whichHover: ', whichHover)

  function handleHover(e) {
    setWhichHover(e)
    console.log(e)
  }

  function handleLeave(e) {
    setWhichHover(null)
  }


  useEffect(() => {
    console.log("fetching...")
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

  // function makeSub(subCategories) {
  //   subCategories.map((item, id) => {
  //     // console.log(typeof (item))
  //     if (typeof (item) === 'object') {
  //       return item
  //     } else {
  //       return item
  //     }
  //   })
  // }

  const categories = useMemo(() => {
    const isObject = (typeof (subCategory) === 'object')
    if (data != null) {
      return data.map((el, index) => (
        <div
          className="categorySection"
          key={`categoryTab-${index}`}
        >
          <div
            className="categoryHeader"
            key={`${el}`}
            onMouseEnter={(event) => handleHover(event.target.innerText)}
          >
            {el.categories}
          </div>
          <div className="subCategories">
            {el.subcategories.map((subCat, id) => {
              if (typeof (subCat) === 'object') {
                console.log(subCat)
                const subCategoryArray = Object.entries(subCat)
                const subcategoryName = subCategoryArray[0][0]
                return (
                  <div
                    className='subCatElement'
                    key={`object-subCat-${id}`}
                    onMouseEnter={(event) => handleHover(event.target.innerText)}
                  >
                    {subcategoryName}
                  </div>
                )
              }
              return (
                <div
                  className='subCatElement'
                  key={`string-subCat-${id}`}
                  onMouseEnter={(event) => handleHover(event.target.innerText)}
                >
                  {subCat}
                </div>
              )
            })}
          </div>

          {/* {makeSub(el.subcategories)} */}
          {/* <SubCategories
            subCategory={el.subcategories}
            category={el.categories}
            onMouseEnter={(event) => handleHover(event.target.innerText)}
          /> */}
        </div>
      ))
    }
    return null
  }, [data])


  return (
    <Layout>
      <div className="subscriptionsContainer">
        <div className="menuContainer paper"
          onMouseLeave={(event) => handleLeave()}
        >
          <div className="sections">
            {data && categories}
          </div>
          <SubCategoryMenu current={whichHover} />
        </div>
        <CategoriesContent />
      </div>
    </Layout>

  )
}

