import React from 'react';
import { Switch, Route } from 'react-router-dom';


// pages
import Home from './pages/Home';
import About from './pages/About';
import Pizzas from './pages/Pizzas';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/About">
                <About />
            </Route>

            <Route exact path="/Pizzas">
                <Pizzas />
            </Route>

            <Route exact path="/Signin">
                <Signin />
            </Route>

            <Route exact path="/Signup">
                <Signup />
            </Route>
        </Switch>
    )
};

export default Routes;