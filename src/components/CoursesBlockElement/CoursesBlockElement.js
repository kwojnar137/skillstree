import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarOutlined from '@material-ui/icons/StarOutlined';
import Grid from '@material-ui/core/Grid';

import { trim } from '../../utils';

import ContentCard from "../ContentCard";
import Title from "../Title";
import Authors from "../Authors";
import ImageContainer from "../ImageContainer";
import Image from "../Image";
import Add from "../Add";
import Description from "../Description";
import ExpandIcon from "../ExpandIcon";
import MoreInfo from "../MoreInfo";
import Share from "../Share";
import CardFoobar from "../CardFoobar";
import Rating from "../Rating";
import RatingContainer from "../RatingContainer";
import MainInfo from "../MainInfo";
import Price from '../Price'
import OldPrice from '../OldPrice'


export default function CourseBlockElement({ course }) {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleDesc() {
    setShowDesc(!showDesc)
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
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
                  if (id > 0) { return ', ' + author.author }
                  return author.author
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
            </RatingContainer>
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
        <ImageContainer>
          <Image src={course.imgUrl} />
        </ImageContainer>
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
      </ContentCard>
    </Grid>
  )
}
