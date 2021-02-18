import {CATEGORIES} from "./types";
import createAsyncReducer from '../../helper/asyncReducer';

const initialState = {
    cats: []
};
const categoriesReducer = createAsyncReducer(CATEGORIES, initialState);
export default categoriesReducer;