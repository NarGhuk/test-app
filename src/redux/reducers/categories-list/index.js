import {CATEGORIES_LIST} from "./types";
import createAsyncReducer from '../../helper/asyncReducer';

const initialState = {};
const categoriesList = createAsyncReducer(CATEGORIES_LIST, initialState);
export default categoriesList;