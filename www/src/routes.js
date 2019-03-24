import React from 'react';
import { Home, Login, Register, Splash } from './components';
import {Route, Switch, Redirect } from 'react-router-dom';

const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Splash} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} /> 
            </Switch>
        </div>
    )
}

export default Routes;