import React from 'react';
import { Home, Login, Register, Splash, GiveFeedback, About, Landing, Methods } from './components';
import {Route, Switch, Redirect } from 'react-router-dom';


const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Splash} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path="/u/:userId" component={GiveFeedback} />
                <Route exact path='/about' component={About} />
                <Route exact path='/landing' component={Landing} />
                <Route exact path='/methods' component={Methods} />
            </Switch>
        </div>
    )
}

export default Routes;