import React, {useCallback, useEffect, useState} from 'react';
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

    const [state, setState] = useState([]);

    const toggleCard = useCallback((id) => {
        setState((prevState => {
            const index = prevState.findIndex(item => item === id);
            const arrayCopy = [...prevState];
            if (index === -1) {
                arrayCopy.push(id)
            } else {
                arrayCopy.splice(index, 1)
            }
            return arrayCopy;
        }))
    }, []);


    return (
        <div className="App">
            <AppProvider>
                <Header cardCount={state.length}/>
                <LeftBarCategories/>
                <UserContact/>
                <CardCategories selectedCards={state} toggleCard={toggleCard} />
            </AppProvider>

        </div>
    );
}

export default App;
