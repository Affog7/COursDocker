import { WEATHER_DATA } from "../../data/stub";
import { setWeatherList } from "../../redux/actions/Action";
import { FETCH_WEATHER } from "../../redux/constants";

describe('setWeatherList', () => {
  it('should create an action with the correct type and payload', () => {
    const weathers = [WEATHER_DATA[0],WEATHER_DATA[1]];
    const expectedAction = {
      type: FETCH_WEATHER,
      payload: weathers,
      cities: [],
    };

    const action = setWeatherList(weathers);

    expect(action).toEqual(expectedAction);
  });
});
