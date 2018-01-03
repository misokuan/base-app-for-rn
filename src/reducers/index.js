import { combineReducers } from 'redux';
import { items, setFilter } from './CoreReducer';

console.log(items, setFilter);

const baseApp = combineReducers({
    items,
    setFilter,
});

export default baseApp;
