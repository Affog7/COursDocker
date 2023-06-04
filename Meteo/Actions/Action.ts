import {FETCH_WEATHER} from './constants';
import { Weather } from '../data/stub';

export const setWeatherList = (weathers: Weather[]) => {
  return {
    type: FETCH_WEATHER,
    payload: weathers,
    toto : true,
  
  };
}