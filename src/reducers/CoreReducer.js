// This file is used to store the reducers for a specific action group (eg. USER, AUTH)

import { combineReducers } from 'redux';
import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_STATUS,
    SET_FILTER,
    VisibilityFilters
} from '../actions';
// This is added to link to their respective actions

const { SHOW_ALL } = VisibilityFilters;

function items(state = [], action) {
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

function setFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

// Groups all functions within this reducer under one constant
export const core = combineReducers({
    items, setFilter,
});
