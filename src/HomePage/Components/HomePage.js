import './homepage.scss';
import React, { Component } from 'react';
import { Input, Image, Button } from 'semantic-ui-react';

export class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
           searchValue: ''
        };
        this.searchSerial = this.searchSerial.bind(this);
        this.getSearchDetails = this.getSearchDetails.bind(this);
    }

    searchSerial(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    getSearchDetails() {
        console.log(this.state.searchValue)
    }
    render() {
        return (
            <div className="home-page">
                <Image src="../../_app/images/Logo-IV-Vapid.png" size="small" className="logo-size"/>
                <div className="search-input">
                    <div>Search by Serial Number or Blockchain ID:</div>
                    <input
                        placeholder="Search..."
                        className='search-bar'
                        onChange={this.searchSerial}
                    />
                    <button className='btn go-button' onClick={this.getSearchDetails}>Go</button>
                </div>
            </div>
        );
    }
}

export default HomePage;