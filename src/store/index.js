/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "../reducers";

// import debug from '../middlewares/debug';
import wallet from '../middlewares/wallet';
import mint from '../middlewares/mint'

const middlewares = applyMiddleware(wallet, mint);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
