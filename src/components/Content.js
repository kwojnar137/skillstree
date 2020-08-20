import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Course from './Course';
import { useChoiceState } from '../context/choice'


export default function Content({ familly }) {
  // const { choice, updateChoice } = useChoice()
  const { choice } = useChoiceState()
  const [courses, setCourses] = useState(null)
  const [filtered, setFiltered] = useState(null)

  console.log({ choice }) //Wskazany w menu wybór 

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
      // console.log({ coursesFiltered })
    }
  }, [choice])


  console.log(courses) //przefiltrowane kursy






  return (
    <div className="categoriesContent">
      <Grid container direction="row">
        {filtered != null && filtered.map((course, id) => (course && <Course course={course} key={id} />))}
      </Grid>
    </div>
  )
}