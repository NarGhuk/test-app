import {SET_CURRENT_CATEGORIES} from './action-types';
import createReducer from '../../helper/createReducer'

 const currentCutName = createReducer('', {
    [SET_CURRENT_CATEGORIES]: (state, action) => action.payload
});

export default currentCutName;
