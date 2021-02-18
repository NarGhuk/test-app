import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppProvider} from './context';
import {fetchCategoriesList} from './redux/reducers/categories-list/action';
import {fetchThumbnailData} from './redux/reducers/thumbnailUrls/action';
import {fetchCategories} from './redux/reducers/categories-name/action';
import {fetchcoreFields} from './redux/reducers/core-fields/action';
import {fetchLogo} from './redux/reducers/company-logo/action';
import Header from './view/components/header';
import UserContact from './view/components/contact-info';
import CardCategories from './view/components/cards-cadegories';
import LeftBarCategories from './view/components/left-categories-sidbar';
import './style.css';
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesList);
        dispatch(fetchLogo);
        dispatch(fetchCategories);
        dispatch(fetchcoreFields);
        dispatch(fetchThumbnailData);

    }, [dispatch]);

    return (
        <div className="App">
            <AppProvider>
                <Header/>
                <LeftBarCategories/>
                <UserContact/>
                <CardCategories />
            </AppProvider>

        </div>
    );
}

export default App;
