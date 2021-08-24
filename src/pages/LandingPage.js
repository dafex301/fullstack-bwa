import React, { Component } from 'react'
import Navbar from 'components/Navbar'
import Hero from 'components/Hero'

import landingPage from 'json/landingPage.json' 


export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Navbar {...this.props}></Navbar>
                <Hero data={landingPage.hero} />
            </>
        )
    }
}
