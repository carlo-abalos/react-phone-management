import {combineReducers} from 'redux';
import phones from './phones';

const phonesApp = combineReducers({
    phones
});

export default phonesApp;