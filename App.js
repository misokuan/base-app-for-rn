/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import baseApp from './src/reducers/index';
import { addItem, removeItem, toggleStatus, filter } from './src/actions';

const store = createStore(baseApp);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentWillMount() {
    store.dispatch(addItem('Learn about actions'));
    store.dispatch(addItem('Learn about reducers'));
    store.dispatch(addItem('Learn about store'));
    store.dispatch(filter('SHOW_ACTIVE'));
    store.dispatch(toggleStatus(2));
    store.dispatch(removeItem(0));
  }
  componentWillUnmount() {
    unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
