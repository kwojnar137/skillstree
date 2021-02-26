import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Courses from "./views/Courses";
import Shop from "./views/Shop";


export default function() {
  return (
    <Switch>
      <Route path="/shop" component={Shop} />
      <Route path="/courses" component={Courses} />
      <Route path="/logout">
        <Redirect to="/" />
      </Route>
      <Route path="/" component={Courses} exact />
      <Route render={() => <h3> Nie ma takiej strony</h3>} />
    </Switch>
  );
}
