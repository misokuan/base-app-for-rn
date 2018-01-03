// This file consolidates all reducers and groups into individual objects for each reducer

import { combineReducers } from 'redux';
import { core } from './CoreReducer';

const baseApp = combineReducers({
    core
});

export default baseApp;
