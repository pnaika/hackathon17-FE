import './header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container-fluid header-background">
                    <div className="navbar-header">
                        <Link
                            className="navbar-brand header-logo"
                            to="/next-page"
                        >
                            Example Route
                        </Link>
                        <Link
                            className="navbar-brand header-logo"
                            to="/"
                        >
                            Home Page
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
