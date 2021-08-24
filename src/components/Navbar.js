import React from 'react'
import LogoWeb from './LogoWeb'
import Button from 'elements/Button'

export default function Navbar(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active": "";
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <LogoWeb />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav right">
                            <li className={`nav-item${getNavLinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass('/browse-by')}`}>
                                <Button className="nav-link" type="link" href="/browse-by">
                                    Browse by
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass('/stories')}`}>
                                <Button className="nav-link" type="link" href="/stories">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass('/agents')}`}>
                                <Button className="nav-link" type="link" href="/agents">
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
