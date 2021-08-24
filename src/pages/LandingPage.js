import React, { Component } from 'react'
import Navbar from 'components/Navbar'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Navbar {...this.props}></Navbar>  
            </>
        )
    }
}
