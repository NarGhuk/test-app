import {THUMBNAIL_URL} from "./types";
import createAsyncReducer from '../../helper/asyncReducer'

const initialState = {};
const thumbnailUrl = createAsyncReducer(THUMBNAIL_URL, initialState);

export default thumbnailUrl;