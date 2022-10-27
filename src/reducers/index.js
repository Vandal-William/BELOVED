import data from '../data/tabsData'


const initialState = {
  products: data,
  tabs: 0,

};

function reducer(state = initialState, action = {}) {
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
    default:
      return state;
  }
}

export default reducer;
