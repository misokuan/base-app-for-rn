import React, { Component } from 'react';
import {
  Text,
  Footer,
  FooterTab,
  Button,
  Badge,
  Icon,
} from 'native-base';

class AppFooter extends Component {
    // Setting initial state
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        };
    }

    // Subfunction 1
    changeTab(tab) {
        this.setState({ tab });
    }

    render() {
        return (
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
        );
    }
}

export default AppFooter;
