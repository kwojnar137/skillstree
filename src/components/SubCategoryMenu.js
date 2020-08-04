import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios';

export function SubCategoryMenu({ current }) {
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


  const subCatRequested = useMemo(() => {
    if (data != null) {
      data.map((item, id) => {
        item.subcategories.map((category, id) => {


          console.log(category.subcategories)
        })
        // if (typeof (item) === 'object') {

        // }

        // console.log('data: ', data)
        // console.log('current: ', current)
        // console.log('item.subcategories.current: ', item)
        // // if(item.subcategories === current){console.log()}
        // if (item.subcategories === current || Array.isArray(item.subcategories) === true) {
        //   const subCategoryArray = Object.entries(item.subcategories)
        //   console.log('hej')
        // }
      })
    }
    return null
  }, [current])


  return (
    <>
      {true && <div className="subCategoryMenuContainer paper">
        {current}
        {subCatRequested}

        Przykład
      </div>}

    </>
  )
}
