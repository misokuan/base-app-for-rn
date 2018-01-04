import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class ItemListing extends Component {
    addItem() {
        const { dispatch } = this.props;
        dispatch(addItem('Added'));
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome} onPress={() => this.addItem()}>
                Item Listing
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
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

const mapStateToProps = ({ CORE }) => {
    const { items } = CORE;
    return { items };
};

export default connect(mapStateToProps)(ItemListing);
