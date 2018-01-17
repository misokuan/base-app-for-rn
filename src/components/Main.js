import React, { Component } from 'react';
import { Container, Content, Item, Input, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Common as s } from '../styles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
    }

    loginUser() {
        console.log(this.state.email, this.state.password);
        Actions.itemListing();
    }

    render() {
        return (
            <Container style={[s.container]}>
              <Content>
                <Item rounded style={[s.ma1, s.ph1]}>
                    <Input
                        placeholder='Email'
                        onChangeText={(text) => { this.setState({ email: text }); }}
                        value={this.state.email}
                    />
                </Item>
                <Item rounded style={[s.ma1, s.ph1]}>
                      <Input
                          placeholder='Password'
                          onChangeText={(text) => { this.setState({ password: text }); }}
                          value={this.state.password}
                          secureTextEntry
                      />
                </Item>
                <Button
                    block
                    style={s.ma1}
                    onPress={() => this.loginUser()}
                >
                    <Text>Log In</Text>
                </Button>
              </Content>
            </Container>
        );
    }
}

export default Main;
