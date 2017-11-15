import {
    SET_BLOCK_DATA
} from '../_app/actionType';

const initialState = {
    blockData: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BLOCK_DATA:
            return {
                ...state,
                blockData: action.payload.blockData
            };
        default:
            return state;
    }
}
