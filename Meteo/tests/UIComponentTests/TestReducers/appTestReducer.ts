import { WEATHER_DATA } from "../../../data/stub";
import appReducer from "../../../redux/reducers/appReducer";

const initialState = {
  weathers: WEATHER_DATA,
  favoriteWeathers: [],
};

// Reducer for tests => Just call the "true" reducer with our mocked data as initial state
// @ts-ignore
export default appTestReducer = (state = initialState, action) => {
    return appReducer(initialState, action);
  }