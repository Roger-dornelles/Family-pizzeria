import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Pizzas from './pages/Pizzas';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Drinks from './pages/Drinks';
import PageError from './pages/PageError';
import AddProducts from './pages/AddProducts';
import DeleteProducts from './pages/DeleteProducts';
import UpdateProducts from './pages/UpdateProducts';

import { isLogged } from './helpers/AuthHandler'

const Routes = () => {
    const logged = isLogged();

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

            <Route exact path="/Drinks">
                <Drinks />
            </Route>

            
            {logged && 
                <>
                    <Route exact path="/Cart">
                        <Cart />
                    </Route>
                    <Route exact path="/AddProducts">
                        <AddProducts />
                    </Route>

                    <Route exact path="/DeleteProducts">
                        <DeleteProducts />
                    </Route>

                    <Route exact path="/UpdateProducts">
                        <UpdateProducts />
                    </Route>
                </>
            }

            <Route exact path="/Signin">
                <Signin />
            </Route>

            <Route exact path="/Signup">
                <Signup />
            </Route>

            <Route>
                <PageError />
            </Route>
        </Switch>
    )
};

export default Routes;