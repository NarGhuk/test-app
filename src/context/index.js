import React, {useContext, createContext, useState} from 'react';

export const AppContext = createContext({});

export const useContextData = () => {
    return useContext(AppContext)
};

export const AppProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactIsOpen, setContactIsOpen] = useState(false);
    const [searchName, setSearchName] = useState('');

    const setSearchedCardsName = (ev) => setSearchName(ev.target.value);
    const toggleDrawer = () => () => setIsOpen(prev => !prev);
    const toggleContact = () => () => setContactIsOpen(prev => !prev);

    return (
        <AppContext.Provider value={{
            visible: isOpen,
            setSearchedCardsName,
            toggleContact,
            toggleDrawer,
            contactIsOpen,
            searchName
        }}>
            {children}
        </AppContext.Provider>
    )
};

