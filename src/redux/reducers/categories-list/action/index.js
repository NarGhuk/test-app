import {CATEGORIES_LIST} from '../types';
import {get} from '../../../../services/http-api.service';
import {COMON_TYPES} from '../../../comonTypes';

const PREFIX_URL = `app-contents/jVV3Q?appId=2731&eventId=2570`;

export const fetchCategoriesList =  async dispatch => {
    dispatch({type: `${CATEGORIES_LIST}_${COMON_TYPES.PENDING}`});
    try {
        const cat = await get(PREFIX_URL);
        dispatch({
            type:`${CATEGORIES_LIST}_${COMON_TYPES.DONE}`,
            payload: cat
        })
    } catch (err) {
        dispatch({
            type:`${CATEGORIES_LIST}_${COMON_TYPES.REJECTED}`,
            payload: err,
            error: true
        })
    }
};

