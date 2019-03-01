
import axios from 'axios';

const API_ROOT = 'http://localhost:3000'

// A Redux middleware that interprets actions with isDataMiddleware info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const isDataMiddleware = action['isDataMiddleware']
  if (typeof isDataMiddleware === 'undefined'
    || isDataMiddleware === false ) {
    return next(action)
  }

  let dataPath = action.dataPath;
  let dataSource = `http://localhost:3000/${dataPath}`;
  
  let dataTransform = action.dataTransform;
  let syncAction = action.syncAction;

  return axios.get(dataSource)
  .then((response) => {
      return response.data;
  })
  .then((data) => {
      console.log(data)
      if(data.status) {
          let finalData = dataTransform(data.data, data);
          console.log("finalData=",finalData);
          next( syncAction(finalData) );
      }else {
          console.log(data.msg);
      }
  })
  .catch(() => {
      console.log("fetch encounter error!");
  });
}
