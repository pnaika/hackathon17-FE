import {
    SET_SIDE_MENU,
    INCREMENT_LOADING_COUNT,
    DECREMENT_LOADING_COUNT,
    RESET_LOADING_COUNT
} from '../_app/actionType';

const initialState = {
    isMenuOpen: true,
    loadingCount: 0,
    menu: []
};

function main(state = initialState, action) {
    switch (action.type) {
        case SET_SIDE_MENU:
            return {
                ...state,
                isMenuOpen: action.payload.openMenu
            };
        case INCREMENT_LOADING_COUNT:
            return {
                ...state,
                loadingCount: state.loadingCount + 1
            };
        case DECREMENT_LOADING_COUNT:
            return {
                ...state,
                loadingCount: state.loadingCount - 1
            };
        case RESET_LOADING_COUNT:
            return {
                ...state,
                loadingCount: initialState.loadingCount
            };
        default:
            return { ...state };
    }
}

export default main;
