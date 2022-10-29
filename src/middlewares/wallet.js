

import axios from "axios";
import Web3 from "web3";

const wallet = (store) => (next) => (action) => {

  if(action.type === 'CONNECT_WALLET'){
    const web3 = new Web3(Web3.givenProvider)
    store.dispatch({
      type: 'SAVE_WEB3',
      web3: web3
    })
    web3.eth.requestAccounts().then(((response) => {
      if(response.length !== 0) {
        store.dispatch({
          type: 'SAVE_ACCOUNT',
          account: response[0]
        })        
      }
      axios.get(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${response[0]}`).then((response) => {
        console.log(response)
      })

      web3.eth.getBalance(response[0]).then((response) => {
        store.dispatch({
          type: 'SAVE_ETHAMOUND',
          eth: web3.utils.fromWei(response) 
        })
      })
    }))
    web3.eth.net.getId().then((response) => {
      store.dispatch({
        type: 'SAVE_NETWORKID',
        networkId: response 
      })
    })
  }
 
  next(action);
};

export default wallet;
