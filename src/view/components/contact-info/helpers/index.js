const choseInitialValue = (type) => {
    switch (type) {
        case 'text':
            return '';
        case 'radio':
            return null;
        case 'checkbox':
            return null;
        default:
            return '';
    }
};


export  const createState = (data = []) => {
    const store = {};
    for (const value of data) {
        store[value.name] = {
            ...value,
            value: choseInitialValue(value.type)
        }
    }
    return store;
};

export const reduce = (state, action) => {
    return {...state, [action.type]: {...state[action.type], value: action.payload}}
};


// const getFieldsTypes = (arr) => {
//     return arr.map((item) => {
//         return {
//             name: item['name'],
//             title: item['title'],
//             type: item['type'],
//             required: item['required'],
//             options: item['options']
//         }
//     })
// };