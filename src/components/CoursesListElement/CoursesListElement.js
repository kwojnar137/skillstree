import React, { useState } from 'react'


import styled from 'styled-components';


import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarOutlined from '@material-ui/icons/StarOutlined';
import Grid from '@material-ui/core/Grid';

import { trim } from '../../utils';

import ContentCard from "./ContentCard";
import Title from "./Title";
import Authors from "./Authors";
import ImageContainer from "./ImageContainer";
import Image from "./Image";
import Add from "../Add";
import Description from "../Description";
import ExpandIcon from "../ExpandIcon";
import Share from "../Share";
import CardFoobar from "../CardFoobar";
import Rating from "../Rating";
import Price from '../Price'
import OldPrice from '../OldPrice'



export default function CourseListElement({ course }) {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleDesc() {
    setShowDesc(!showDesc)
  }

  const trimDesc = trim(course.description, showDesc, 160)

  return (

    <ContentCard>
      <ImageContainer width={'300px'} >
        <Image src={course.imgUrl} />
      </ImageContainer>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10}>
          <Title>  <MoreVertIcon />{course.title}</Title>
          <Authors>
            {course.authors.map((author, id) => {
              if (id > 0) { return ', ' + author.author }
              return author.author
            })}
          </Authors>
          <Description> {(!showDesc && trim(course.description, { size: 160 })) || course.description} </Description >

          <CardFoobar>
            <Grid container>
              <Grid item xs={2}>
                <Add>
                  <AddIcon />
                </Add>
              </Grid>
              <Grid item xs={2}>
                <Share>
                  <ShareIcon />
                </Share>
              </Grid>
              <Grid item xs={6}> </Grid>
              <Grid item xs={2} >
                <ExpandIcon onClick={handleDesc} rotateAction={showDesc}>
                  <ExpandMoreIcon />
                </ExpandIcon>
              </Grid>
            </Grid>
          </CardFoobar>

        </Grid>
        <Grid item xs={2}>
          <Rating>
            <StarOutlined />
            {course.rating}
          </Rating>
          {
            course.oldPrice &&
            <>
              <OldPrice>
                {course.oldPrice}{course.currency}
              </OldPrice>
              <Price isOldPrice={true}>
                {course.price}{course.currency}
              </Price>
            </> ||
            <Price isOldPrice={false}>
              {course.price}{course.currency}
            </Price>
          }


        </Grid>
      </Grid>


    </ContentCard>

  )
}
