// This file consolidates all reducers and groups into individual objects for each reducer

import { combineReducers } from 'redux';
import { CoreReducer } from './CoreReducer';

const rootReducer = combineReducers({
    CORE: CoreReducer,
});

export default rootReducer;
