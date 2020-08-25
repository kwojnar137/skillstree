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

    <ContentCard>
      <ImageContainer width={'200px'}>
        <Image src={course.imgUrl} />
      </ImageContainer>
    </ContentCard>

  )
}
