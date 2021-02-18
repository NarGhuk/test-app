import React, {useContext, useState} from 'react';

export const DrawerContext = React.createContext(false);

export const useDrawer = () => {
    return useContext(DrawerContext)
};


export const DrawerProvider =({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen( prev => !prev);
    return (
        <DrawerContext.Provider value={{visible : isOpen, toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
};

// const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
// });
//
// const toggleDrawer = (anchor, open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//         return;
//     }
//
//     setState({ ...state, [anchor]: open });
// };