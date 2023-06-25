import {FETCH_WEATHER} from '../constants';
import { City, Weather } from '../../data/stub';

export const setWeatherList = (weathers: Weather[], cities : City[] = []) => {
  return {
    type: FETCH_WEATHER,
    payload: weathers,
    cities : cities,
  };
}
