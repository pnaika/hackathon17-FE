import {
    SET_PART_DETAILS
} from '../_app/actionType';

const initialState = {
    partDetails: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PART_DETAILS:
            return {
                ...state,
                partDetails: action.payload.partDetails
            };
        default:
            return state;
    }
}
