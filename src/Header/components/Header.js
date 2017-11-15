import './header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Image, Button } from 'semantic-ui-react';

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
                            to={'/'}
                        >
                            <Image src="../../_app/images/Logo-IV-Vapid.png" size="small"/>
                        </Link>
                        <h3 className="pull-right block-header">Blockchain Part History</h3>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
