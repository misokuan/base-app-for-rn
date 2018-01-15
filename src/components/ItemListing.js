import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
  Text,
  Container,
  Footer,
  FooterTab,
  Button,
  Badge,
  Icon,
} from 'native-base';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class ItemListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        };
    }

    addItem() {
        const { dispatch } = this.props;
        dispatch(addItem('Added'));
        console.log(this.props);
    }

    changeTab(tab) {
        this.setState({ tab });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                  <Text style={styles.welcome} onPress={() => this.addItem()}>
                    Item Listing
                  </Text>
                </Content>
                <Footer>
                  <FooterTab>
                    <Button
                        active={this.state.tab === 0}
                        onPress={() => this.changeTab(0)}
                        badge
                        vertical
                    >
                      <Badge><Text>2</Text></Badge>
                      <Icon name="apps" />
                      <Text>Apps</Text>
                    </Button>
                    <Button
                        active={this.state.tab === 1}
                        onPress={() => this.changeTab(1)}
                        vertical
                    >
                      <Icon name="camera" />
                      <Text>Camera</Text>
                    </Button>
                    <Button
                        active={this.state.tab === 2}
                        onPress={() => this.changeTab(2)}
                        badge
                        vertical
                    >
                      <Badge><Text>51</Text></Badge>
                      <Icon active name="navigate" />
                      <Text>Navigate</Text>
                    </Button>
                    <Button
                        active={this.state.tab === 3} 
                        onPress={() => this.changeTab(3)}
                        vertical
                    >
                      <Icon name="person" />
                      <Text>Contact</Text>
                    </Button>
                  </FooterTab>
                </Footer>
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
