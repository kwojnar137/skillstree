import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios';



function SubCat2Level({ subcategories }) {
  console.log('subcategories: ', subcategories)

  return subcategories.map((item, id) => (
    <div className="subCategory-2" key={`${id}`}>
      {item.name} ({item.howManyCourses})
    </div>
  ))
}



export function SubCategoryMenu({ current }) {
  const [data, setData] = useState(null)
  const currentID = parseInt(current)


  useEffect(() => {
    const fetchData = async () => {
      axios.get('/categoriesdata')
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          setData('uh oh error!')
        })
    }
    fetchData();
  }, [current])


  const subCatFirstLevel = useMemo(() => {
    if (data != null && current != null) {
      return data[currentID].subcategories.map((subCategory1, id) => (
        <div className="subcategoryTab">
          <div className="subCategory-1">
            {subCategory1.name}({subCategory1.howManyCourses})
          </div>
          {subCategory1.subcategories != null && <SubCat2Level subcategories={subCategory1.subcategories} />}
        </div>
      ))
    }
    return null
  }, [current])



  return (
    <>
      {current != null && <div className="subCategoryMenuContainer paper">
        {subCatFirstLevel}
      </div>}
    </>
  )
}
