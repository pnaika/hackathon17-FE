import React, { Component } from 'react';
import { actions } from '../';
import { connect } from 'react-redux';
import { get, forOwn } from 'lodash';

export class DataBlock extends Component {
    constructor(props) {
        super(props);

        this.displayBlockData = this.displayBlockData.bind(this);
    }

    componentWillMount() {
        this.props.getBlockData();
    }

    displayBlockData() {
        const { blockData } = this.props;

        return (<div>{JSON.stringify(blockData)}</div>)
    }

    render() {
        return (
            <div>
                This is Data Block
                {this.displayBlockData()}
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {
        blockData: state.blockData.blockData
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        getBlockData: () => {
            dispatch(actions.getBlockData());
        }
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DataBlock);
