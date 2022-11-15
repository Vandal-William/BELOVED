
const initialState = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Circle-icons-download.svg/2048px-Circle-icons-download.svg.png',
  original_image: null

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
    case 'SHOW_IMAGE':
      return {
        ...state,
        image : action.image,
        original_image: action.original_image
      };
        
    default:
      return state;
  }
}

export default mintNft;