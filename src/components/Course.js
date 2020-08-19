import React, { useState } from 'react'
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarOutlined from '@material-ui/icons/StarOutlined';
import Grid from '@material-ui/core/Grid';




const ContentCard = styled.div`
      margin: 10px;
      position: relative;

      background-color: white;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
      0px 1px 1px 0px rgba(0,0,0,0.14), 
      0px 1px 3px 0px rgba(0,0,0,0.12);

      &:hover {
        background-color: #fcfcfc;
      }
`


const MainInfo = styled.div`

`

const Title = styled.div`
  font-size: 1.1rem;
  padding: 5px;
  font-weight:bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


const Authors = styled.div`
  padding: 5px;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ImageContainer = styled.div`
height: 200px;
display: flex;
justify-content: center;
align-items: center;
  overflow: hidden;
`

const Image = styled.img`
  padding: 5px 0px;
  width: 100%;
`

const Add = styled.div`

display: flex;
justify-content: center;
`

const Description = styled.div`
  padding: 10px;
  opacity: 0.7;
`

const ExpandIcon = styled.div`
transform: ${props => (props.rotateAction ? 'rotate(180deg)' : 'rotate(0deg)')};
display: flex;
justify-content: center;
`

const MoreInfo = styled.div`
display: flex;
justify-content: center;
`

const Share = styled.div`
display: flex;
justify-content: center;
`
const CardFoobar = styled.div`
padding: 10px;
  
`

const Rating = styled.div`
  display: flex;
  font-size: 1em;
  align-items:center;
  justify-content: center;
  color: #FFC200;
  text-shadow: 1px 1px 2px gold;
`

const RatingContainer = styled.div`
display: block;
text-align: center;
`


export default function Course({ course }) {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleDesc() {
    setShowDesc(!showDesc)
  }


  function trim(desc) {
    if (showDesc === false) {
      desc = desc.slice(0, 160)
      desc = desc + '...'
    }
    return desc
  }

  const trimDesc = trim(course.description)

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
