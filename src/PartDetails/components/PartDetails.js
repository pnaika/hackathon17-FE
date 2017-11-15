import './page-details.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

export class PartDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {partDetails} = this.props;
        return (
            <div>
                <div>
                    <div className="page-details-header">
                        <div>
                            <label>Part Type :</label>
                            <span>{get(partDetails, 'partName', 'Ignition Switch')}</span>
                        </div>
                        <div>
                            <label>Serial Number :</label>
                            <span>{get(partDetails, 'manufacturingSerialNumber', ' ')}</span>
                        </div>
                        <div>
                            <label>Blockchain ID :</label>
                            <span>{get(partDetails, 'blockChainId', ' ')}</span>
                        </div>
                        <div>
                            <label>Status :</label>
                            <span>{get(partDetails, 'status', ' ')}</span>
                        </div>
                    </div>

                    <div className="page-details-header">
                        Part History
                    </div>

                    <div>
                        <div>
                            <label>Part Manufacturer</label>
                            <div>{get(partDetails, 'partsManufacturer', '')}</div>
                        </div>
                        <div>
                            <label>Part Created</label>
                            <div>{get(partDetails, 'partCreated', '')}</div>
                        </div>
                        <div>
                            <label>Shipped To Assembly</label>
                            <div>{get(partDetails, 'shippedToAssembly', '')}</div>
                        </div>
                        <div>
                            <label>Assembly Plant</label>
                            <div>{get(partDetails, 'assemblyPlant', '')}</div>
                        </div>
                        <div>
                            <label>Car Model</label>
                            <div>{get(partDetails, 'carModel', '')}</div>
                        </div>
                        <div>
                            <label>Assembled in Car</label>
                            <div>{get(partDetails, 'carAssemblyDate', '')}</div>
                        </div>
                        <div>
                            <label>Sold to Dealership</label>
                            <div>{get(partDetails, 'dealershipSale', '')}</div>
                        </div>
                        <div>
                            <label>Dealership</label>
                            <div>{get(partDetails, 'dealership', '')}</div>
                        </div>
                        <div>
                            <label>Sold to Owner</label>
                            <div>{get(partDetails, 'ownershipSale', '')}</div>
                        </div>
                        <div>
                            <label>Owner</label>
                            <div>{get(partDetails, 'owner', '')}</div>
                        </div>
                        <div>
                            <label>Repair History</label>
                            <div>{get(partDetails, 'repairHistory', '')}</div>
                        </div>
                    </div>

                </div>
                <div className="aggregated-data">
                    <div className="aggregated-wrapper">
                        <div className="aggregated-data-header">
                            {get(partDetails, 'manufacturingSerialNumber', ' ')} Part Analysis
                        </div>
                        <div className="aggregated-data-section">
                            <label>Total installed in cars : </label>
                            <div>{get(partDetails, 'totalCars', '--')}</div>
                        </div>
                        <div className="aggregated-data-section">
                            <label>Total Manufacturer in part : </label>
                            <div>{get(partDetails, 'totalManufacture', '--')}</div>
                        </div>
                        <div className="aggregated-data-section">
                            <label>Cars with Parts : </label>
                            <div>{get(partDetails, 'carParts', '--')}</div>
                        </div>
                        <div className="aggregated-data-section">
                            <label>Total Failures : </label>
                            <span>
                                {get(partDetails, 'totalFailure', 0)}
                                <a>Failure Analysis</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        partDetails: state.partDetails.partDetails
    }
}

export default connect(mapStatetoProps)(PartDetails);
