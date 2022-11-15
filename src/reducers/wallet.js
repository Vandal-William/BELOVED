import data from '../data/tabsData'

const initialState = {
  products: data,
  tabs: 0,
  web3: null,
  account: null,
  eth: null, 
  networkId: null,
  nfts: null,
  loggin: false

};

function wallet(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_VALUE': // pour ajouter un champ controller
      return {
        ...state,
        [action.key]: action.value,
        // la notation entre crochet me permet de spécifier
        // via une expression le nom de la propriété cliblée
      };
    case 'SHOW_NEW_SECTION':
      return {
        ...state,
        tabs: action.tabs
      };
    case 'SAVE_WEB3':
      return {
        ...state,
        web3: action.web3
      };
    case 'SAVE_ACCOUNT':
      return {
        ...state,
        account: action.account,
        loggin: true
      };  
    case 'SAVE_ETHAMOUND':
    return {
      ...state,
      eth: action.eth,
    };
    case 'SAVE_NETWORKID':
      return {
        ...state,
        networkId: action.networkId,
      };
    case 'SAVE_NFTS':
    return {
      ...state,
      nfts: action.nfts,
    };              
    default:
      return state;
  }
}

export default wallet;
