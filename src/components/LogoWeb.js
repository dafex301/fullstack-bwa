import Button from 'elements/Button'
import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function LogoWeb() {
    return (
        <Router>
            <Route>
                <Button className="" href="" type="link">
                    <img src={logo} alt="logo" width="80"/>
                </Button>
            </Route>
        </Router>
    );
}
