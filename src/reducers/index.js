import { combineReducers } from 'redux';

import connectWallet from './wallet';


const rootReducer = combineReducers({
    wallet: connectWallet,

});

export default rootReducer;
