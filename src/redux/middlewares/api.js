import {API} from '../action-types'
import { startNetwork, endNetwork } from '../actions/ui';

const api = ({ dispatch, getState }) => next => action => {
  //console.log(action)
  if (action.type !== API) {
    return next(action);
  }
  if(!action.payload.url){
    throw Error("Invalid url")
  }
  
  const { url, success, label } = action.payload;
  
  dispatch(startNetwork(label))
  //console.log(url)
  return fetch(url)
  .then(response => response.json())
    .then(data => {
     // console.log(data)
      if(!data) return false
      
      dispatch(success(data))
      dispatch(endNetwork(label))
      return data
    })
    .catch(error => {
      console.error(error)
      dispatch(endNetwork(label))
    })
}

export default api;
