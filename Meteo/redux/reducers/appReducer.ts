import { FETCH_WEATHER } from "../constants";

  
const initialState = {
  weathers: [],
  favoriteWeathers: [],
}
//@ts-ignore
export default appReducer = (state = initialState, action) => { ///action event receved
  switch (action.type) {
    
    case FETCH_WEATHER:
     
      // @ts-ignore
      return {...state, weathers: action.payload};
   
    default:
      return state;
  }
}