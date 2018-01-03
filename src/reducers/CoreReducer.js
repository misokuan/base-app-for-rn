import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_STATUS,
    SET_FILTER,
    VisibilityFilters
} from '../actions';

const { SHOW_ALL } = VisibilityFilters;

export function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: {
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        }
        case REMOVE_ITEM:
            return state.filter((item, index) => index !== action.index);
        case TOGGLE_STATUS:
            return state.map((item, index) => {
                    if (index === action.index) {
                        return Object.assign({}, item, {
                            completed: !item.completed
                        });
                    }
                    return item;
            });
        default:
            return state;
    }
}

export function setFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
