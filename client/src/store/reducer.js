import * as actionTypes from './actions';

const initialState = {
    searchResults: null,
    isTopSearches: true,
    historyItems: null
}



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_TOP_SEARCHES:
            return {
                ...state,
                isTopSearches: !state.isTopSearches,
                historyItems: action.items
            };
        case actionTypes.DISPLAY_SEARCH_RESULTS:
            return {
                ...state,
                isTopSearches: true,
                searchResults: action.term
            }
        default:
            return state;
    }
}

export default reducer;