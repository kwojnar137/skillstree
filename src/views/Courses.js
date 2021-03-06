import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../layout";
import "../sass/courses.scss";

import Content from "./CoursesContent";
import DropdownMenu from "../components/DropdownMenu";

import { makeFamilly, messageFromStatus } from "../utils";
import { ChoiceProvider } from "../context/choiceContext";

import { LoadingSpinner } from "../components/LoadingSpinner";
import AlertMessage from "../components/AlertBox";

export default function Courses() {
  const [categories, setCategories] = useState(null);
  const [familly, setFamilly] = useState(null);
  const [variant, setVariant] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const CATEGORIES_API_URL = "/categories";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(CATEGORIES_API_URL);
        setCategories(res.data);
      } catch (error) {
        setCategories(null);
        const { message, variant } = messageFromStatus(error.response.status);
        setVariant(variant);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (categories) {
      const famillyFromCategories = makeFamilly(categories);
      setFamilly(famillyFromCategories);
    }
  }, [categories]);

  function clearError() {
    setError(null);
    setVariant(null);
  }

  const mystyle = {
    border: "0px",
    // width: "100%!important",
    padding: "0px",
    margin: "0 auto",
    minHeight: "200px",
    maxWidth: "1000px",
    display: "block",
    width: "inherit",
    height: "inherit"

  };

  return (
    <Layout>
      <div className="container">
      {/* <iframe id="dl-widget" style={mystyle} src="https://widget-sandbox.droplabs.pl/index.html?facilityId=1&onlineGroupId=3421"></iframe> */}

        {/* {loading && <LoadingSpinner />}
        {error && (
          <AlertMessage
            variant={variant}
            message={error}
            onClose={clearError}
          />
        )}
        <ChoiceProvider>
          {familly && (
            <div className="menuContainer">
              {" "}
              <DropdownMenu famillyArray={familly} />{" "}
            </div>
          )}
          {familly && <Content familly={familly} />}
        </ChoiceProvider> */}
      </div>
    </Layout>
  );
}
