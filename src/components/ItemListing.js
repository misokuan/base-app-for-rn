import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const ItemListing = () => (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Item Listing
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

export default ItemListing;
