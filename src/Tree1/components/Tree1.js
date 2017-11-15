import React, {Component} from 'react';
import Tree from 'react-d3-tree';
import _ from 'lodash';

const myTreeData = [
    {
        name: 'Top Level',
        attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C'
        },
        children: [
            {
                name: 'Level 2: A',
                attributes: {
                    keyA: 'val A',
                    keyB: 'val B',
                    keyC: 'val C'
                }
            },
            {
                name: 'Level 2: B'
            }
        ]
    }
];

const mock = {
    "serialNumber1234": {
        "carCompany1": {
            "dealerId1": [
                {
                    "carId": "carId1",
                    "consumerId": "consumerId1"
                },
                {
                    "carId": "carId2",
                    "consumerId": "consumerId2"
                }
            ]
        },
        "carCompany2": {
            "dealerId2": [
                {
                    "carId": "carId3",
                    "consumerId": "consumerId3"
                },
                {
                    "carId": "carId4",
                    "consumerId": "consumerId4"
                }
            ],
            "dealerId3": [
                {
                    "carId": "carId5",
                    "consumerId": "consumerId5"
                }
            ]
        }
    }
};
let modified = getData(mock);

console.log(modified);

function getData(data) {
    return _.map(data, function(value, key) {
        return {
            name: key,
            children: _.isArray(value) ? _.map(value, function(obj) {
                return {
                    name: obj.consumerId
                }
            }) : getData(value)
        }
    })
}

const node = {
    shape: 'rect',
    shapeProps: {
        width: 100,
        height: 100
    }
}

class Tree1 extends Component {
    render() {
        console.log('test');
        debugger;
        return (
        <div id="treeWrapper" style={{width: '800', height: '800'}}>

            <Tree data={modified}
                  nodeSvgShape={node}
                  orientation={"vertical"}
                  pathFunc={"elbow"}/>

        </div>
    );
    }
}

export default Tree1;