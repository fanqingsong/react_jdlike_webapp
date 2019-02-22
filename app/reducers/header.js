const headerImgs = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_HEADER_IMAGE_URL':
            console.log("enter UPDATE_HEADER_IMAGE_URL");
            console.log("header images:", action.payload);
            return action.payload;
        default:
            return state;
    }
}
  
export default headerImgs


  