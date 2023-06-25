import { WEATHER_DATA } from "../../data/stub";
import { addToFavorites, removeFromFavorites, setFavorites } from "../../redux/actions/ActionFavorites";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES } from "../../redux/constants";

describe('addToFavorites', () => {
  it('should create an action with the correct type and payload', () => {
    const weather = WEATHER_DATA[0] ;
    const expectedAction = {
      type: ADD_TO_FAVORITES,
      payload: weather,
    };

    const action = addToFavorites(weather);

    expect(action).toEqual(expectedAction);
  });
});

describe('removeFromFavorites', () => {
  it('should create an action with the correct type and payload', () => {
    const weatherId = 'weather-123';
    const expectedAction = {
      type: REMOVE_FROM_FAVORITES,
      payload: weatherId,
    };

    const action = removeFromFavorites(weatherId);

    expect(action).toEqual(expectedAction);
  });
});

describe('setFavorites', () => {
  it('should create an action with the correct type and payload', () => {
    const favorites = [{ /* Favori 1 */ }, { /* Favori 2 */ }];
    const expectedAction = {
      type: SET_FAVORITES,
      payload: favorites,
    };

    const action = setFavorites(favorites);

    expect(action).toEqual(expectedAction);
  });
});
