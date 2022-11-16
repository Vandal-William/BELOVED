import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    credential: true
  });

const mint = (store) => (next) => (action) => {
   if (action.type === 'MINT_NFT') {
    const state = store.getState();
    const formData = new FormData();
    
    formData.append("name", state.mint.name)
    formData.append("file", state.mint.original_image)
    formData.append("description", state.mint.description)
    instance.post('/jsonipfs', formData)
    .then((response) => {
        console.log(response)
    })
   }
    next(action);
  };
  
  export default mint;
  