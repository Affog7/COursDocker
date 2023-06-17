import { FETCH_WEATHER_ICONS} from '../constants';
import {  WeatherIcon } from '../../data/stub';

export const setWeatherIconList = (weathersIcons: WeatherIcon[]) => {
  return {
    type: FETCH_WEATHER_ICONS,
    payload: weathersIcons,
    toto : true,
  
  };
}