import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_STATUS,
    SET_FILTER,
} from './types';

export function addItem(text) {
    console.log('enters here', text);
    return { type: ADD_ITEM, text };
}

export function removeItem(index) {
    return { type: REMOVE_ITEM, index };
}

export function toggleStatus(index) {
    return { type: TOGGLE_STATUS, index };
}

export function setFilter(filter) {
    return { type: SET_FILTER, filter };
}
