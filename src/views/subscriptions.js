import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../layout'

import axios from 'axios';
import { SubCategoryMenu } from '../components/SubCategoryMenu';
import CategoriesContent from '../components/CategoriesContent';
import '../sass/subscriptions.scss'



export default function Subscriptions() {
  const [data, setData] = useState([])
  const [whichHover, setWhichHover] = useState(null)
  const history = useHistory()


  function handleHover(e) {
    setWhichHover(e)
  }

  function handleLeave(e) {
    setWhichHover(null)
  }


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
  }, [])


  return (
    <Layout>
      <div className="subsContent">
        <div
          className="sideMenu paper"
          onMouseLeave={(event) => handleLeave()}
        >
          <div className="tabs">
            {data.map((element, id) => (
              <div
                className={parseInt(whichHover) === parseInt(id) ? 'mainCategoryLabel focused' : 'mainCategoryLabel'}
                key={`mainCategory-${id}`}
                onClick={() => history.push(`${element.url}`)}
                id={`${id}`}
                onMouseEnter={(event) => handleHover(event.target.id)}
              >
                {element.category}
              </div>
            ))}
          </div>

          <SubCategoryMenu current={whichHover} />
        </div>
        <CategoriesContent />
      </div>

    </Layout>
  )
}