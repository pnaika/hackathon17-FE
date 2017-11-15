// import 'whatwg-fetch';
// import {
//     SET_PART_DETAILS
// } from '../_app/actionType';
// import { checkStatus, parseJSON } from '../_app/utils';
//
// export function setPartDetails(partDetails) {
//     return {
//         type: SET_PART_DETAILS,
//         payload: { partDetails }
//     };
// }
//
// export function getPartDetailsById(id) {
//     const url = `http://localhost:8099/api/v1/blockchain/details/${id}`;
//     return (dispatch) => {
//         return fetch(url)
//             .then(checkStatus)
//             .then(parseJSON)
//             .then((res) => {
//                 dispatch(setPartDetails(res))
//             })
//             .catch((err) => {
//
//             });
//     };
// }