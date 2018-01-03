// This file consolidates all reducers and groups into individual objects for each reducer

import { combineReducers } from 'redux';
import { CORE } from './CoreReducer';

const baseApp = combineReducers({
    CORE
});

export default baseApp;
