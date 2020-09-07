import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useChoiceState } from '../context/choiceContext'
import { CoursesBlockElement } from '../components/CoursesBlockElement';
import { CoursesListElement } from '../components/CoursesListElement';
import ViewType from '../components/ViewType'
import ViewIcon from '../components/ViewIcon'
import AlertMessage from '../components/AlertBox'
import { findChildrensId } from '../utils'

// import { ReactComponent as ViewListIcon } from '@material-ui/icons/ViewList';
// import { ReactComponent as ViewModuleIcon } from '@material-ui/icons/ViewModule';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { LoadingSpinner } from '../components/LoadingSpinner';


export default function Content({ familly }) {
  const { choice } = useChoiceState()
  const [courses, setCourses] = useState({
    collection: null,
    loading: true,
    showAlert: false,
  })
  const [filtered, setFiltered] = useState(null)
  const [viewTypeBlock, setViewTypeBlock] = useState("list")

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/courses')
        setCourses({ collection: res.data, loading: false, showAlert: false })
      } catch (err) {
        setCourses({ collection: null, loading: false, showAlert: true })
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1)


  }, [])

  const { collection, loading, showAlert } = courses

  useEffect(() => {
    if (collection) {
      let requestedCategoriesIDs = findChildrensId(familly, choice)
      const coursesFiltered = collection.map((course) => {
        const categoryIds = course.category.map((item) => {
          return item.id
        })

        const stat = categoryIds.some((element) => {
          if (requestedCategoriesIDs.includes(element))
            return true
        })

        if (stat) return course
        return null
      })
      setFiltered(coursesFiltered)
    }
  }, [choice])

  function handleViewType(viewType) {
    setViewTypeBlock(viewType)
  }

  return (
    <div className="categoriesContent">

      <ViewType >

        <ViewIcon activeId={viewTypeBlock === "list"} >
          <ViewListIcon style={{ fontSize: 60 }} id="list" onClick={() => handleViewType("list")} />
        </ViewIcon>

        <ViewIcon activeId={viewTypeBlock === "block"} >
          <ViewModuleIcon style={{ fontSize: 60 }} id="block" onClick={() => handleViewType("block")} />
        </ViewIcon>

      </ViewType>
      {
        viewTypeBlock === "list" && filtered &&
        filtered.map((course, id) => (course && <CoursesListElement course={course} key={id} />))
      }
      {viewTypeBlock === "block" &&
        <Grid container direction="row">
          {
            filtered && filtered.map((course, id) => (course && <CoursesBlockElement course={course} key={id} />))
          }
        </Grid>
      }
      {loading && <LoadingSpinner />}
      {showAlert && <AlertMessage alertMessage={"There is no courses"} />}
    </div>
  )
}