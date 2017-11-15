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


// import 'whatwg-fetch';
// import {
//     SET_JOBSITE_REQUEST_LIST,
//     SET_JOBSITE_REQUEST_LOADING
// } from '../_app/actionTypes';
// import { getDealerHeaders, checkStatus, parseJSON } from '../_app/utils';
// import { GATEKEEPER_API } from '../_app/constants';
// import { actions as toastActions } from '../Toaster';
// import qs from 'query-string';
//
// export function setJobsiteRequestList(requests) {
//     return {
//         type: SET_JOBSITE_REQUEST_LIST,
//         payload: { requests }
//     };
// }
//
// export function setJobsiteRequestLoading(isLoading) {
//     return {
//         type: SET_JOBSITE_REQUEST_LOADING,
//         payload: { isLoading }
//     };
// }
//
// export function getJobsiteParams(status) {
//     const queryParams = {
//         namespace: 'jobsite'
//     };
//     switch (status) {
//         case 'All':
//             break;
//         case 'Open':
//             queryParams.status = 'OPENED';
//             break;
//         case 'Completed':
//             queryParams.status = 'CLOSED';
//             break;
//     }
//
//     return qs.stringify(queryParams);
// }
//
// export function callJobsiteRequest(dealerCode, jobsiteStatus) {
//     const url = `${GATEKEEPER_API}/requests?${getJobsiteParams(jobsiteStatus)}`;
//     return (dispatch) => {
//         dispatch(setJobsiteRequestLoading(true));
//         return fetch(url, {
//             headers: getDealerHeaders(dealerCode)
//         })
//             .then(checkStatus)
//             .then(parseJSON)
//             .then((res) => {
//                 dispatch(setJobsiteRequestList(res));
//             })
//             .catch((err) => {
//                 dispatch(toastActions.setToasterMessage(err));
//             })
//             .then(() => {
//                 dispatch(setJobsiteRequestLoading(false));
//             });
//     };
// }

