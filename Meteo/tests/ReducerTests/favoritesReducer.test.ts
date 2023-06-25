import { ADD_TO_FAVORITES, FETCH_FAVORITE, REMOVE_FROM_FAVORITES, SET_FAVORITES } from '../../redux/constants';
import { WEATHER_DATA } from '../../data/stub';
import FavoritesReducer from '../../redux/reducers/FavoritesReducer';

describe('favoritesReducer', () => {
  it('should handle ADD_TO_FAVORITES action correctly', () => {
    const initialState = {
      favorites: [WEATHER_DATA[1], WEATHER_DATA[0]],
    };

    const action = {
      type: ADD_TO_FAVORITES,
      payload: WEATHER_DATA[2],
    };

    const expectedState = {
      favorites: [ WEATHER_DATA[1], WEATHER_DATA[0], WEATHER_DATA[2]],
    };

    const nextState = FavoritesReducer(initialState, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should handle FETCH_FAVORITE action correctly', () => {
    const initialState = {
      favorites: [],
    };

    const action = {
      type: FETCH_FAVORITE,
      payload: [WEATHER_DATA[1], WEATHER_DATA[0]],
    };

    const expectedState = {
      favorites: [],
    };

    const nextState = FavoritesReducer(initialState, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should handle REMOVE_FROM_FAVORITES action correctly', () => {
    const initialState = {
      favorites: [{ id: '1', weather : WEATHER_DATA[0] }, { id: '2',  weather : WEATHER_DATA[1] }, { id: '3',  weather : WEATHER_DATA[2] }],
    };

    const action = {
      type: REMOVE_FROM_FAVORITES,
      payload: '2',  
    };

    const expectedState = {
      favorites: [{ id: '1', weather : WEATHER_DATA[0] }, { id: '3',  weather : WEATHER_DATA[2] }],
    };

    const nextState = FavoritesReducer(initialState, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should handle SET_FAVORITES action correctly', () => {
    const initialState = {
      favorites: [WEATHER_DATA[0]],
    };

    const action = {
      type: SET_FAVORITES,
      payload: [WEATHER_DATA[1], WEATHER_DATA[2]],
    };

    const expectedState = {
      favorites: [ WEATHER_DATA[1], WEATHER_DATA[2]],
    };

    const nextState = FavoritesReducer(initialState, action);
    expect(nextState).toEqual(expectedState);
  });

  it('should return the same state for unknown action types', () => {
    const initialState = {
      favorites: [WEATHER_DATA[1]],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: WEATHER_DATA[0],
    };

    const nextState = FavoritesReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
 