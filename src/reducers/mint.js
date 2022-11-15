
const initialState = {


};

function mintNft(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_VALUE': // pour ajouter un champ controller
      return {
        ...state,
        [action.key]: action.value,
        // la notation entre crochet me permet de spécifier
        // via une expression le nom de la propriété cliblée
      };
         
    default:
      return state;
  }
}

export default mintNft;