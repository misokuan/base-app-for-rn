import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
  Text,
  Container,
} from 'native-base';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import AppFooter from './Core/AppFooter';

class ItemListing extends Component {
    // Subfunction 1
    addItem() {
        const { dispatch } = this.props;
        dispatch(addItem('Added'));
        console.log(this.props);
    }

    // Main function to be executed
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                  <Text style={styles.welcome} onPress={() => this.addItem()}>
                    Item Listing
                  </Text>
                </Content>
                <AppFooter />
            </Container>
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
