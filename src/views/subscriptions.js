import React, { useEffect, useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../layout'

import axios from 'axios';
import { SubCategoryMenu } from '../components/SubCategoryMenu';
import CategoriesContent from '../components/CategoriesContent';
import '../sass/subscriptions.scss'



export default function Subscriptions() {
  const [data, setData] = useState(null)
  const [whichHover, setWhichHover] = useState(null)
  const history = useHistory()


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
      axios.get('/categoriesdata')
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          setData('uh oh error!')
        })
    }
    fetchData();
  }, [])

  const mainCategories = useMemo(() => {
    if (data != null) {
      return data.map((element, id) => (
        <div
          className={parseInt(whichHover) === parseInt(id) ? 'mainCategoryLabel focused' : 'mainCategoryLabel'}
          key={`mainCategory-${id}`}
          onClick={() => history.push(`${element.url}`)}
          id={`${id}`}
          onMouseEnter={(event) => handleHover(event.target.id)}
        >
          {console.log('element URL: ', element.url)}
          {element.category}
        </div>
      ))
    }
    return null
  }, [data, whichHover])


  return (
    <Layout>
      <div className="subsContent">
        <div
          className="sideMenu paper"
          onMouseLeave={(event) => handleLeave()}
        >
          <div className="tabs">
            {mainCategories}
          </div>

          <SubCategoryMenu current={whichHover} />
        </div>
        <CategoriesContent />
      </div>

    </Layout>
  )
}




