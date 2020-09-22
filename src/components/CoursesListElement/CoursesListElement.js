import React, { useState } from "react";
import PropTypes from "prop-types";

import AddIcon from "@material-ui/icons/Add";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarOutlined from "@material-ui/icons/StarOutlined";
import Grid from "@material-ui/core/Grid";

import { trim } from "../../utils";

import ContentCard from "./ContentCard";
import Title from "./Title";
import Authors from "../Authors";
import ImageContainer from "./ImageContainer";
import Image from "./Image";
import Add from "../Add";
import Description from "../Description";
import ExpandIcon from "../ExpandIcon";
import Share from "../Share";
import CardFoobar from "../CardFoobar";
import Rating from "../Rating";
import Price from "../Price";

export default function CourseListElement({ course }) {
  const [showDesc, setShowDesc] = useState(false);

  function handleDesc() {
    setShowDesc(!showDesc);
  }

  return (
    <ContentCard>
      <ImageContainer width={"300px"}>
        <Image src={course.imgUrl} />
      </ImageContainer>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10}>
          <Title>
            {" "}
            <MoreVertIcon />
            {course.title}
          </Title>
          <Authors authorsData={course.authors} isList={true} />
          <Description>
            {" "}
            {showDesc
              ? course.description
              : trim(course.description, { size: 160 })}
          </Description>
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
              <Grid item xs={6}>
                {" "}
              </Grid>
              <Grid item xs={2}>
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
          <Price
            price={course.price}
            oldPrice={course.oldPrice}
            currency={course.currency}
          />
        </Grid>
      </Grid>
    </ContentCard>
  );
}

CourseListElement.propTypes = {
  course: PropTypes.object,
};
