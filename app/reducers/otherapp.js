const otherappImgs = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_OTHERAPP_IMAGE_URL':
            console.log("enter UPDATE_OTHERAPP_IMAGE_URL");
            console.log("header images:", action.payload);
            return action.payload;
        default:
            return state;
    }
}
  
export default otherappImgs


  