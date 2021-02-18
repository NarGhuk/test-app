import {SHARID_TYPES} from '../sharid/actionTypes'

const createAsyncReducer = (prefix, initialState) => (state = { isLoading: true, data: initialState }, action) => {
    const { type } = action;
    switch ( type ) {
        case `${prefix}_${SHARID_TYPES.PENDING}`:

            return { data: state.data, isLoading: true, error: null, };
        case `${prefix}_${SHARID_TYPES.DONE}`:

            return {
                ...state,
                data: action.payload || initialState,
                isLoading: false,
                error: null
            };
        case `${prefix}_${SHARID_TYPES.REJECTED}`:
            return {
                ...state,
                data: {},
                isLoading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default createAsyncReducer;