import React from "react"
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './views/Home'
import Achievments from './views/Achievments'
import Subscriptions from './views/Subscriptions'
import Partners from './views/Partners'
import Account from './views/Account'


export default function () {
    return (
        <Switch>
            <Route path="/achievments" component={Achievments} />
            <Route path='/subscriptions' component={Subscriptions} />
            <Route path="/partners" component={Partners} />
            <Route path='/account' component={Account} />
            <Route path='/logout'>
                <Redirect to='/' />
            </Route>
            <Route path="/" component={Home} exact />
            <Route render={() => <h3> Nie ma takiej strony</h3>} />
        </Switch>
    )
}


