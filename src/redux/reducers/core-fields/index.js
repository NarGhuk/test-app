import {GET_CORE_FIELDS} from "./types";
import createAsyncReducer from '../../helper/asyncReducer'

const initialState = {};
const mainLogoReducer = createAsyncReducer(GET_CORE_FIELDS, initialState);

export default mainLogoReducer;