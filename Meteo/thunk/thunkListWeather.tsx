import { City, Weather } from "../data/stub";
import { setWeatherList } from "../redux/actions/Action";

export const getWeathersList = () => {
  return async dispatch => {
    try {
      const citiesPromise = await fetch('https://iut-weather-api.azurewebsites.net/cities');
      const citiesListJson = await citiesPromise.json();
       const citiesList: City[] = citiesListJson.map(elt => new City(elt["name"], elt["latitude"], elt["longitude"]));

      let weatherList: Weather[] = [];

      for (let index = 0; index < citiesList.length; index++) {

        let weathersPromise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name/' + citiesList[index].name);
        let weathersListJson = await weathersPromise.json();

        console.log(weathersPromise);
   
          let weatherData =  new Weather(
            weathersListJson.at,
            weathersListJson.visibility,
              weathersListJson.weatherType,
              weathersListJson.weatherDescription,
              weathersListJson.temperature,
              weathersListJson.temperatureFeelsLike,
              weathersListJson.humidity,
              weathersListJson.windSpeed,
              weathersListJson.pressure,
              citiesList[index]
            );
     
        
          weatherList.push(weatherData)
       

      
    }
    dispatch(setWeatherList(weatherList));
    } catch (error) {
      console.log('Error---------', error);
    }
  }
}

