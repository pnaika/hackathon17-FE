import { combineReducers } from 'redux';
import { reducer as blockData } from '../DataBlock';
import { reducer as partDetails } from '../HomePage';

export default combineReducers({
    blockData,
    partDetails
});
