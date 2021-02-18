import {GET_LOGO} from '../types';
import {COMON_TYPES}from '../../comonTypes'
import {get} from '../../../../services/http-api.service';

const PREFIX_URL = `get-comp-logo/2731`;

export const fetchLogo = () => async dispatch => {
    dispatch({type: `${GET_LOGO}_${COMON_TYPES.PENDING}`});
    try {
        const logo = await get(PREFIX_URL);
        dispatch({
            type: `${GET_LOGO}_${COMON_TYPES.DONE}`,
            payload: logo
        })
    } catch (err) {
        dispatch({
            type: `${GET_LOGO}_${COMON_TYPES.REJECTED}`,
            payload: err,
            error: true
        })
    }
};

