// This file is used to store the reducers for a specific action group (eg. USER, AUTH)

import { combineReducers } from 'redux';
import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_STATUS,
    FILTER,
    VisibilityFilters
} from '../actions';
// This is added to link to their respective actions

const { SHOW_ALL } = VisibilityFilters;

// modify the state base on cases
function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: {
            // this adds a new object to the original items state
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        }
        case REMOVE_ITEM:
            // this removes item object based on index specified (from action)
            return state.filter((item, index) => index !== action.index);
        case TOGGLE_STATUS:
            // this updates item object based on index specified (from action)
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

function filter(state = SHOW_ALL, action) {
    switch (action.type) {
        // this updates the current filter (from action)
        case FILTER:
            return action.filter;
        default:
            return state;
    }
}

// Groups all functions within this reducer under one constant
export const CoreReducer = combineReducers({
    items,
    filter,
});
