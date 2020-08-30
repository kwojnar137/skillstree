import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { useChoiceState } from '../context/choice'
import { CoursesBlockElement } from './CoursesBlockElement';
import { CoursesListElement } from './CoursesListElement';
import ViewType from './ViewType'
import ViewIcon from './ViewIcon'
// import { findChildrensId } from '../utils'
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

  function findChildrensId(famillyPart, choice, founded = false) {
    return famillyPart.map((member) => {
      if (member.id === choice || founded) {
        return [member.id].concat(findChildrensId(member.childrens, choice, true))
      } else {
        return findChildrensId(member.childrens, choice)
      }
    }).flat(Infinity)
  }







  useEffect(() => {
    if (courses) {
      console.log({ choice })
      let requestedCategoriesIDs = findChildrensId(familly, choice)
      console.log({ requestedCategoriesIDs })
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

  function handleViewType(viewType) {
    setViewTypeBlock(prevState => ({ state: !prevState.state, activeId: viewType }))
  }

  return (
    <div className="categoriesContent">
      <ViewType >

        <ViewIcon activeId={viewTypeBlock.activeId === "list"} >
          <ViewListIcon style={{ fontSize: 60 }} id="list" onClick={() => handleViewType("list")} />
        </ViewIcon>

        <ViewIcon activeId={viewTypeBlock.activeId === 'block'} >
          <ViewModuleIcon style={{ fontSize: 60 }} id="block" onClick={() => handleViewType("block")} />
        </ViewIcon>

      </ViewType>
      {viewTypeBlock.state &&
        <Grid container direction="row">
          {
            filtered && filtered.map((course, id) => (course && <CoursesBlockElement course={course} key={id} />))
          }
        </Grid>
      }
      {
        !viewTypeBlock.state && filtered &&
        filtered.map((course, id) => (course && <CoursesListElement course={course} key={id} />))
      }
    </div>
  )
}