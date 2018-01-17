import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors as c } from './colors';

// Set commonly used css styling here, or can opt for react-native-style-tachyons for presets
export const Common = EStyleSheet.create({
    container: {
        flex: 1,
        padding: '1rem',
        backgroundColor: c.primaryBackground,
        justifyContent: 'center',
    },
    verticalCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ma0: {
        margin: '0.2rem'
    },
    ma1: {
        margin: '0.4rem'
    },
    ph0: {
        paddingLeft: '0.2rem',
        paddingRight: '0.2rem'
    },
    ph1: {
        paddingLeft: '0.4rem',
        paddingRight: '0.4rem'
    }
});
