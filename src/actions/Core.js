// This file is used to manipulate, fetch, and return new data to component

/* eslint-disable max-len */
/*
Flow is:
    1. Actions are called from component through store.dispatch(functionHere(params))
    2. Enters to this page to manipulate data or start fetch request from API
    3. Passes the end result (data) through { type: TYPE_HERE, keyName1: 'foo', keyName2: 'bar' } to reducer
    4. Reducer then stores the data, and can be accessed through store.getState() (will be called automatically when state changes)
*/

import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_STATUS,
    SET_FILTER,
} from './types';
// Make sure './types' is filled in, see './types' for more info

export function addItem(text) {
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
