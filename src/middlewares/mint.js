import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    credential: true
  });

const mint = (store) => (next) => (action) => {
   if (action.type === 'MINT_NFT') {
    const state = store.getState();
    instance.post('/jsonipfs', {

        original_image: state.mint.original_image.slice(12),
        name: state.mint.name,
        description: state.mint.description,

    })
    .then((response) => {
        console.log(response)
    })
   }
    next(action);
  };
  
  export default mint;
  