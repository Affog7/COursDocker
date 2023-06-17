import {  WeatherIcon } from "../data/stub";
import { setWeatherIconList } from "../redux/actions/ActionIcon";

export const getWeathersIconList = () => {
  return async dispatch => {
    try {
      const iconsPromise = await fetch('https://iut-weather-api.azurewebsites.net/condition-codes');
      const iconsListJson = await iconsPromise.json();
       const iconsList: WeatherIcon[] = iconsListJson.map(elt => new WeatherIcon(elt["name"], elt["imageUri"]));
   // console.log(iconsList);
    dispatch(setWeatherIconList(iconsList));
    } catch (error) {
      console.log('Error---------', error);
    }
  }
}

