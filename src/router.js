import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import ItemListing from './components/ItemListing';

class RouterComponent extends Component {

    render() {
        return (
            <Router>
                  <Scene key="root">
                    {
                        /*
                        Key is the identifier,
                        eg. calling Action.main() will render Main component
                        with header title of Mainpage
                        */
                    }
                    <Scene
                      key="main"
                      component={Main}
                      title="Base App"
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
