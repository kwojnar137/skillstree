import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios';


function SubCat2Level({ subcategories, history }) {

  return subcategories.map((item, id) => (
    <div className="subCategory-2" key={id} onClick={() => history.push(item.url)}>
      {item.name} ({item.howManyCourses})
    </div>
  ))
}



export function SubCategoryMenu({ current }) {
  const [data, setData] = useState(null)
  const history = useHistory()
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



  return (
    <>
      {current != null && <div className="subCategoryMenuContainer paper">
        {
          data[currentID].subcategories.map((subCategory1, id) => (
            <div className="subcategoryTab" key={id}>
              <div className="subCategory-1" onClick={() => history.push(`${subCategory1.url}`)} >
                {subCategory1.name}({subCategory1.howManyCourses})
              </div>
              {subCategory1.subcategories != null && <SubCat2Level subcategories={subCategory1.subcategories} history={history} />}
            </div>
          ))
        }
      </div>}
    </>
  )
}