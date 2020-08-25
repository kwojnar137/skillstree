import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useChoiceState } from '../context/choice'
import CourseBlock from './CourseBlock';
import CourseList from './CourseList';
import ViewType from './ViewType'
import ViewIcon from './ViewIcon'
// import { ReactComponent as ViewListIcon } from '@material-ui/icons/ViewList';
// import { ReactComponent as ViewModuleIcon } from '@material-ui/icons/ViewModule';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';


export default function Content({ familly }) {
  const { choice } = useChoiceState()
  const [courses, setCourses] = useState(null)
  const [filtered, setFiltered] = useState(null)
  const [viewTypeBlock, setViewTypeBlock] = useState({
    state: false,
    activeId: []
  })


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/courses')
        setCourses(res.data)
      } catch (err) {
        setCourses(null)
      }
    }
    fetchData();
  }, [])


  function findChildrensId(famillyPart, founded = false) {

    return famillyPart.map((member) => {
      if (member.id === choice || founded) {
        return [member.id].concat(findChildrensId(member.childrens, true))
      } else {
        return findChildrensId(member.childrens)
      }
    }).flat(Infinity)
  }

  let requestedCategoriesIDs = findChildrensId(familly)


  useEffect(() => {
    if (courses) {
      const coursesFiltered = courses.map((course) => {
        const categoryIds = course.category.map((item) => {
          return item.id
        })

        const stat = categoryIds.some((element) => {
          if (requestedCategoriesIDs.includes(element)) return true
        })

        if (stat) return course
        return null

      })
      setFiltered(coursesFiltered)
    }
  }, [choice])

  function handleViewType(e) {

    e.persist();
    console.log(e.target.id)
    // console.log(e.target.nearestViewportElement)
    setViewTypeBlock(prevState => ({ state: !prevState.state, activeId: e.target.id }))
  }

  console.log({ choice })
  console.log({ filtered })
  console.log({ viewTypeBlock })




  return (
    <div className="categoriesContent">
      <ViewType >

        <ViewIcon activeId={viewTypeBlock.activeId === "list"} >
          <ViewListIcon style={{ fontSize: 60 }} id="list" onClick={(e) => handleViewType(e)} />
        </ViewIcon>

        <ViewIcon activeId={viewTypeBlock.activeId === 'block'} >
          <ViewModuleIcon style={{ fontSize: 60 }} id="block" onClick={(e) => handleViewType(e)} />
        </ViewIcon>

      </ViewType>
      {viewTypeBlock.state &&
        <Grid container direction="row">
          {
            filtered && filtered.map((course, id) => (course && <CourseBlock course={course} key={id} />))
          }
        </Grid>
      }
      {
        !viewTypeBlock.state && filtered &&
        filtered.map((course, id) => (course && <CourseList course={course} key={id} />))
      }
    </div>
  )
}