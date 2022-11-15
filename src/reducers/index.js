import { combineReducers } from 'redux';

import connectWallet from './wallet';
import mintNft from './mint'


const rootReducer = combineReducers({
    wallet: connectWallet,
    mint : mintNft

});

export default rootReducer;
