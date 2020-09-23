import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { useChoiceState } from "../context/choiceContext";
import { CoursesBlockElement } from "../components/CoursesBlockElement";
import { CoursesListElement } from "../components/CoursesListElement";
import ViewType from "../components/ViewType";
import ViewIcon from "../components/ViewIcon";
import AlertMessage from "../components/AlertBox";
import { findChildrensId } from "../utils";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { messageFromStatus } from "../utils";

export default function Content({ familly }) {
  const { choice } = useChoiceState();
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);
  const [variant, setVariant] = useState(null);

  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState(null);
  const [viewTypeBlock, setViewTypeBlock] = useState("list");

  const COURSES_API_URL = "/courses";

  console.log(familly);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(COURSES_API_URL);
        setCourses(res.data);
      } catch (error) {
        const { message, variant } = messageFromStatus(error.response.status);
        setVariant(variant);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  useEffect(() => {
    if (courses) {
      let requestedCategoriesIDs = findChildrensId(familly, choice);
      const coursesFiltered = courses.map((course) => {
        const categoryIds = course.category.map((item) => {
          return item.id;
        });

        const stat = categoryIds.some((element) => {
          if (requestedCategoriesIDs.includes(element)) return true;
        });

        if (stat) return course;
        return null;
      });
      setFiltered(coursesFiltered);
    }
  }, [choice]);

  function clearError() {
    setError(null);
    setVariant(null);
  }

  return (
    <div className="categoriesContent">
      <ViewType>
        <ViewIcon activeId={viewTypeBlock === "list"}>
          <ViewListIcon
            style={{ fontSize: 60 }}
            id="list"
            onClick={() => setViewTypeBlock("list")}
          />
        </ViewIcon>

        <ViewIcon activeId={viewTypeBlock === "block"}>
          <ViewModuleIcon
            style={{ fontSize: 60 }}
            id="block"
            onClick={() => setViewTypeBlock("block")}
          />
        </ViewIcon>
      </ViewType>
      {viewTypeBlock === "list" &&
        filtered &&
        filtered.map(
          (course, id) =>
            course && <CoursesListElement course={course} key={id} />
        )}
      {viewTypeBlock === "block" && (
        <Grid container direction="row">
          {filtered &&
            filtered.map(
              (course, id) =>
                course && <CoursesBlockElement course={course} key={id} />
            )}
        </Grid>
      )}
      {loading && <LoadingSpinner />}
      {error && (
        <AlertMessage variant={variant} message={error} onClose={clearError} />
      )}
    </div>
  );
}

Content.propTypes = {
  familly: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      parentId: PropTypes.number,
      childrens: PropTypes.array,
    })
  ).isRequired,
};
