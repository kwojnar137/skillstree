import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useChoiceState } from '../context/choiceContext'
import { CoursesBlockElement } from '../components/CoursesBlockElement';
import { CoursesListElement } from '../components/CoursesListElement';
import ViewType from '../components/ViewType'
import ViewIcon from '../components/ViewIcon'
import AlertBox from '../components/AlertBox'
import { findChildrensId } from '../utils'

// import { ReactComponent as ViewListIcon } from '@material-ui/icons/ViewList';
// import { ReactComponent as ViewModuleIcon } from '@material-ui/icons/ViewModule';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import LoadingSpinner from '../components/LoadingSpinner';


export default function Content({ familly }) {
  const { choice } = useChoiceState()
  const [courses, setCourses] = useState({
    collection: null,
    loading: true,
    showAlert: false,
  })
  const [filtered, setFiltered] = useState(null)
  const [viewTypeBlock, setViewTypeBlock] = useState("list")
  const [loadingCourses, setLoadingCourses] = useState(false)


  useEffect(() => {
    async function fetchData() {
      try {
        // console.log('courses.loading: ', courses.loading)
        const res = await axios.get('/courses2')

        setCourses({ collection: res.data, loading: false, showAlert: false })
      } catch (err) {
        setCourses({ collection: null, loading: false, showAlert: true })
        console.log(err)
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000)


  }, [])

  console.log({ choice })
  console.log({ courses })

  // console.log('courses.loading outside useEffect: ', courses.loading)
  // console.log({ courses })

  const { collection, loading, showAlert } = courses


  // console.log({ collection })



  useEffect(() => {
    if (collection) {
      console.log("setting filtered")
      let requestedCategoriesIDs = findChildrensId(familly, choice)
      console.log({ requestedCategoriesIDs })
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
      {showAlert && <AlertBox alertMessage={"There is no courses"} />}
    </div>
  )
}