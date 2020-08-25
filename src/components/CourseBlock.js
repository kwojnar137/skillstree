import React, { useState } from 'react'


import styled from 'styled-components';


import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarOutlined from '@material-ui/icons/StarOutlined';
import Grid from '@material-ui/core/Grid';

import { trim } from '../utils';

import ContentCard from "./ContentCard";
import Title from "./Title";
import Authors from "./Authors";
import ImageContainer from "./ImageContainer";
import Image from "./Image";
import Add from "./Add";
import Description from "./Description";
import ExpandIcon from "./ExpandIcon";
import MoreInfo from "./MoreInfo";
import Share from "./Share";
import CardFoobar from "./CardFoobar";
import Rating from "./Rating";
import RatingContainer from "./RatingContainer";
import MainInfo from "./MainInfo";


export default function CourseBlock({ course }) {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleDesc() {
    setShowDesc(!showDesc)
  }

  const trimDesc = trim(course.description, showDesc, 160)

  return (

    <Grid item xs={12} sm={12} md={6} lg={3}>
      <ContentCard>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={1}   >
            <MoreInfo>
              <MoreVertIcon />
            </MoreInfo>
          </Grid>
          <Grid item xs={8}>
            <MainInfo>
              <Title>{course.title}</Title>
              <Authors>
                {course.authors.map((author, id) => {
                  if (id > 0) { return ', ' + author.name }
                  return author.name
                })}
              </Authors>
            </MainInfo>
          </Grid>
          <Grid item xs={3}>
            <RatingContainer>
              <Rating>
                <StarOutlined />
                {course.rating}
              </Rating>
                ({course.numberOfRatings})
              </RatingContainer>
          </Grid>
        </Grid>
        <ImageContainer>
          <Image src={course.imgUrl} />
        </ImageContainer>
        <Description> {trimDesc} </Description >
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
      </ContentCard>
    </Grid>
  )
}
