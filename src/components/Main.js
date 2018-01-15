import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Common } from '../styles';

class Main extends Component {

    render() {
        return (
            <Container style={Common.container}>
              <Content>
                <Item rounded>
                  <Input placeholder='Email' />
                </Item>
                <Item rounded>
                  <Input placeholder='Password' />
                </Item>
                <Button block onPress={() => Actions.itemListing()}>
                    <Text>Log In</Text>
                </Button>
              </Content>
            </Container>
        );
    }
}

export default Main;
