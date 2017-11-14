import {
    SET_SIDE_MENU,
    INCREMENT_LOADING_COUNT,
    DECREMENT_LOADING_COUNT,
    RESET_LOADING_COUNT
} from '../_app/actionType';

export function setMenuState(openMenu) {
    return {
        type: SET_SIDE_MENU,
        payload: { openMenu }
    };
}

export function setLoading(isLoading, { delay } = { delay: false }) {
    const setLoadingDelay = 300;
    return (dispatch) => {
        if (isLoading) {
            dispatch(incrementLoadingCount());
        } else {
            if (delay) {
                setTimeout(() => {
                    dispatch(decrementLoadingCount());
                }, setLoadingDelay);
            } else {
                dispatch(decrementLoadingCount());
            }
        }
    };
}

export function incrementLoadingCount() {
    return { type: INCREMENT_LOADING_COUNT };
}

export function decrementLoadingCount() {
    return { type: DECREMENT_LOADING_COUNT };
}

export function resetLoading() {
    return { type: RESET_LOADING_COUNT };
}
