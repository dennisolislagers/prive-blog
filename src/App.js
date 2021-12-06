import React, { useState } from 'react';
import './App.css';
import {Route, Switch, Redirect, NavLink,} from "react-router-dom";
import HomePagina from "./pages/HomePagina";
import LoginPagina from "./pages/LoginPagina";
import SpecifiedPostPagina from "./pages/SpecifiedPostPagina";
import AllPostPagina from "./pages/AllPostPagina";



function App() {

    // We houden in de state bij of iemand is "ingelogd"

    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    // // toggleIsAuthenticated(true)

    return (
        <div>
            Welkom op deze fantastische Blog
            <nav>
                <ul className="nav-container">
                    <li><NavLink to="/" activeClassName="active-link">HOME</NavLink></li>
                    <li><NavLink to="/login" activeClassName= "active-link">{!isAuthenticated ? "INLOGGEN" : "UITLOGGEN"} </NavLink></li>
                    <li>{!isAuthenticated ? <NavLink to="/blogposts" exact activeClassName="active-link">BLOGOVERZICHT</NavLink> : '' }</li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <HomePagina/>
                </Route>
                <Route path="/login">
                    {!isAuthenticated ? <LoginPagina userIsAuthenticated={toggleIsAuthenticated}/> : <Redirect to="/"/> }
                </Route>
                <Route exact path="/blogposts/">
                    <AllPostPagina/>
                </Route>
                <Route path="/blogposts/:blogId">
                    <SpecifiedPostPagina/>
                </Route>
            </Switch>
        </div>
    );
}
export default App;