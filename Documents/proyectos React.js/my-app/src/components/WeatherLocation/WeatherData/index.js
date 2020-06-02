import React from 'react'
import WeatherExtraInfo from '../WeatherData/WeatherExtraInfo'
import WeatherTemperature from '../WeatherData/WeatherTemperature'
import {
    SUN,
} from '../../../constants/weathers'


const WeatherData = () => (
    <div>
        <WeatherTemperature 
        temperature={20} 
        weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);
export default WeatherData;