import React from "react"
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './views/Home'
import Courses from './views/Courses'




export default function () {
    return (
        <Switch>
            <Route path="/courses" component={Courses} />
            <Route path='/logout'>
                <Redirect to='/' />
            </Route>
            <Route path="/" component={Home} exact />
            <Route render={() => <h3> Nie ma takiej strony</h3>} />
        </Switch>
    )
}


