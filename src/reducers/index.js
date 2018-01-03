import { combineReducers } from 'redux';
import * as CoreReducer from './CoreReducer';

const baseApp = combineReducers({
    CoreReducer,
});

export default baseApp;
