import Button from 'elements/Button'
import React from 'react'
import logo from '../images/logo.svg'

export default function LogoWeb() {
    return (
            <Button className="" href="" type="link">
                <img src={logo} alt="logo" width="80"/>
            </Button>
    );
}
