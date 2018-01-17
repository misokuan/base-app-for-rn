import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import EStyleSheet from 'react-native-extended-stylesheet';
import rootReducer from './src/reducers';
import Router from './src/router';
import API from './src/api';

// Required to begin using react-native-extended-stylesheet
EStyleSheet.build({});

// Creates redux store with API endpoint
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(API))
);

// Stops getting state updates after app is closed
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
