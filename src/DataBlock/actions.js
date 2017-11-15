import 'whatwg-fetch';
import {
    SET_BLOCK_DATA
} from '../_app/actionType';
import { checkStatus, parseJSON } from '../_app/utils';

export function setBlockDatatList(blockData) {
    return {
        type: SET_BLOCK_DATA,
        payload: { blockData }
    };
}

export function getBlockData() {
    const url = 'http://localhost:8099/api/v1/blockchain/serialNumber1234';
    return (dispatch) => {
        return fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .then((res) => {
                dispatch(setBlockDatatList(res))
            })
            .catch((err) => {

            });
    };
}