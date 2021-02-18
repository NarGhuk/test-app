import React from 'react';
import {useSelector} from 'react-redux';
import Card from './container/card';
import {useContextData} from '../../../context';
import {categoriesListSelector} from '../../../redux/selectors/allCategoriesList';
import {currentCutNameSelector} from '../../../redux/selectors/uiCurrentCut';
import {thumbnailUrlsSelector} from '../../../redux/selectors/thumbnailUrls';
import './style.css';

const Categories = () => {
    const {data: {contents}, isLoading} = useSelector((state) => categoriesListSelector(state));
    const currentCutName = useSelector((state) => currentCutNameSelector(state));
    const {data:thumbnailUrls,isLoading:isThumbnai} = useSelector((state) => thumbnailUrlsSelector(state));
    const {searchName } = useContextData();
    let listContent = null;

    if (!isLoading) {
        const result = contents.map((item) => {
            return item['contentInf'].map((cat) => {
                return cat
            })
        });
        listContent = [].concat.apply([], result);
    }
     const filterBySearchName = (searchName, arr)=> {
        return searchName ? arr.filter(item=> item.name === searchName) : arr
     };

    return !isLoading && !isThumbnai && (
        <div className="cards-row">
            {
                !currentCutName ?
                listContent.length && (filterBySearchName(searchName, listContent)).map((item) => {
                       const {url} =  thumbnailUrls.find(({id})=> item.id === id);
                    return (
                            <Card key={item.id} data={item} url={url}/>
                    )
                }) : filterBySearchName(searchName, contents.find(items => items['catName'] === currentCutName)['contentInf'])
                    .map((item) => (
                            <Card key={item.id} data={item}/>
                    ))

            }
        </div>
    )
};
export default Categories;