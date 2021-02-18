import {GET_LOGO} from "./types";
import createAsyncReducer from '../../helper/asyncReducer'

const initialState = {
    logo: ''
};
const mainLogoReducer = createAsyncReducer(GET_LOGO, initialState);

export default mainLogoReducer;