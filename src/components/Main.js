import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Common } from '../styles';

const Main = () => (
    <View style={Common.container}>
      <Text style={styles.welcome}>
        Welcome!
      </Text>
      <Text onPress={() => Actions.itemListing()}>
        Go to Item Listing
      </Text>
    </View>
 );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Main;
