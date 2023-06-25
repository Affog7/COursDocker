import { WEATHER_DATA } from "../../data/stub";
import { FETCH_WEATHER } from "../../redux/constants";
import appReducer from "../../redux/reducers/appReducer";

describe('appReducer', () => {
  it('should handle FETCH_WEATHER action correctly', () => {
    const initialState = {
      weathers: [],
      favoriteWeathers: [],
    };

    const action = {
      type: FETCH_WEATHER,
      payload: [WEATHER_DATA[0], WEATHER_DATA[1]],
    };

    const expectedState = {
      weathers: [WEATHER_DATA[0], WEATHER_DATA[1] ],
      favoriteWeathers: [],
    };

    const nextState = appReducer(initialState, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should return the same state for unknown action types', () => {
    const initialState = {
      weathers: [],
      favoriteWeathers: [],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: "DATA INCONNUES",
    };

    const nextState = appReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
