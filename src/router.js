import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import ItemListing from './components/ItemListing';

class RouterComponent extends Component {

    render() {
        return (
            <Router>
                  <Scene key="root">
                    <Scene
                      key="main"
                      component={Main}
                      title="Mainpage"
                      initial
                    />
                    <Scene
                      key="itemListing"
                      component={ItemListing}
                      title="Items"
                    />
                  </Scene>
            </Router>
        );
    }

}

export default RouterComponent;
