import {GET_CORE_FIELDS} from '../types';
import {COMON_TYPES}from '../../comonTypes'
import {get} from '../../../../services/http-api.service';

const PREFIX_URL = `get-app-fields/2731?eventId=2570`;

export const fetchcoreFields = () => async dispatch => {
    dispatch({type: `${GET_CORE_FIELDS}_${COMON_TYPES.PENDING}`});
    try {
        const filds = await get(PREFIX_URL);
        dispatch({
            type: `${GET_CORE_FIELDS}_${COMON_TYPES.DONE}`,
            payload: filds
        })
    } catch (err) {
        dispatch({
            type: `${GET_CORE_FIELDS}_${COMON_TYPES.REJECTED}`,
            payload: err,
            error: true
        })
    }
};

