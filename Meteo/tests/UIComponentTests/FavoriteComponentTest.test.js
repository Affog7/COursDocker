import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { FavoriteWeather } from '../../Components/FavoriteComponent';
 
describe('FavoriteWeather', () => {
  const weather = {
    _at: '2022-06-01',
    _weatherType: 'Sunny',
    _temperature: 25,
    _windSpeed: 10,
    _pressure: 1012,
    _temperatureFeelsLike: 26,
  };

  test('renders weather information correctly', () => {
    render(<FavoriteWeather weather={weather} />);

    expect(screen.getByTestId('weather_date')).toHaveTextContent('2022-06-01');
    expect(screen.getByTestId('weather_type')).toHaveTextContent('Sunny');
    expect(screen.getByTestId('weather_temperature')).toHaveTextContent('25 °C');
    expect(screen.getByTestId('weather_wind')).toHaveTextContent('10');
    expect(screen.getByTestId('weather_pressure')).toHaveTextContent('1012');
    expect(screen.getByTestId('weather_like')).toHaveTextContent('26');
  });
});
