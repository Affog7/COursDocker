import { WEATHER_DATA } from "../data/stub";
import { FETCH_WEATHER } from "./constants";
import { getWeathersList } from "./thunk/actionListWeather";

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