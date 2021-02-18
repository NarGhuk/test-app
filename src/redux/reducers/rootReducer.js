import { combineReducers } from "redux";
import mainLogoReducer from './company-logo';
import categoriesListName from './categories-name';
import categoriesList from './categories-list';
import currentCutName from './uiReduserCurrentCat';
import coreFields from './core-fields';
import thumbnailUrls from './thumbnailUrls';

export default combineReducers({
    categoriesListName,
    mainLogoReducer,
    categoriesList,
    currentCutName,
    thumbnailUrls,
    coreFields,
});
