import {THUMBNAIL_URL} from '../types';
import {get} from '../../../../services/http-api.service';
import {COMON_TYPES} from '../../../comonTypes';

const PREFIX_URL = `content-thumbnail-url/2731`;

export const fetchThumbnailData = async dispatch => {
    dispatch({type: `${THUMBNAIL_URL}_${COMON_TYPES.PENDING}`});
    try {
        const data = await get(PREFIX_URL);
        dispatch({
            type:`${THUMBNAIL_URL}_${COMON_TYPES.DONE}`,
            payload: data
        })
    } catch (err) {
        dispatch({
            type:`${THUMBNAIL_URL}_${COMON_TYPES.REJECTED}`,
            payload: err,
            error: true
        })
    }
};

