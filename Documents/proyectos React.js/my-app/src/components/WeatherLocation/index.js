import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeatherTemperature from './WeatherData/WeatherTemperature';

const WeatherLocation = () => (
    <div>
        <Location city={"Marinilla"}></Location>
        <WeatherData>
            <WeatherExtraInfo></WeatherExtraInfo>
            <WeatherTemperature></WeatherTemperature>
        </WeatherData>
    </div>
);

export default WeatherLocation;