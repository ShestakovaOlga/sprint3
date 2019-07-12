import React, { useState } from "react"
import { Link, Route, Switch } from 'react-router-dom';
import { Pricing } from "./pricing";
import { Home } from "./home";
import { About } from "./about";



export function Main() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/pricing' component={Pricing} />
            </Switch>
        </main>
    </div>
}