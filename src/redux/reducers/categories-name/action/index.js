import {CATEGORIES} from '../types';
import {get} from '../../../../services/http-api.service';
import {COMON_TYPES} from '../../comonTypes';

const PREFIX_URL = `content-app-cats/jVV3Q?appId=2731&eventId=2570`;

export const fetchCategories = () => async dispatch => {
    dispatch({type: `${CATEGORIES}_${COMON_TYPES.PENDING}`});
    try {
        const cat = await get(PREFIX_URL);
        dispatch({
            type:`${CATEGORIES}_${COMON_TYPES.DONE}`,
            payload: cat
        })
    } catch (err) {
        dispatch({
            type:`${CATEGORIES}_${COMON_TYPES.REJECTED}`,
            payload: err,
            error: true
        })
    }
};

