import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import Router from './src/router';

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

class App extends Component {
    componentWillUnmount() {
        unsubscribe();
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
