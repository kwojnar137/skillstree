import React from "react"
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './home'
import Achievments from './views/achievments'
import Subscriptions from './views/Subscriptions'
import Partners from './views/partners'
import Account from './views/account'


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


