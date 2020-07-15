import React from "react"
import { Route, Switch } from "react-router-dom";

import Home from './home'
import Explore from './explore'
import Details from './Details'

export default function () {
    return (
        <Switch>
            <Route path="/explore" component={Explore} />
            <Route path='/detail/:id' component={Details} />
            <Route path="/" component={Home} exact />
            <Route render={() => <h3> Nie ma takiej strony</h3>} />
        </Switch>
    )
}