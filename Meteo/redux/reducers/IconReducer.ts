import { FETCH_WEATHER_ICONS } from "../constants";

  
const initialState = {
  weathersIcons: [],
}
//@ts-ignore
export default IconsReducer = (state = initialState, action) => { ///action event receved
  switch (action.type) {
    
    case FETCH_WEATHER_ICONS:
     
      // @ts-ignore
      return {...state, weathersIcons: action.payload};
   
    default:
      return state;
  }
}