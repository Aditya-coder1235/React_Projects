import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp(){
    const[weatherInfo,setWetherInfo]=useState({
         city:"Delhi",
        feelslike_c: 41,
        humidity: 54,
        temp_c: 34.4,
        temp_f: 93.9,
        wind_dir: "ENE",
    });
    let updateinfo=(result)=>{
        setWetherInfo(result);
    }
    return(
        <>
            <h2>Weather App</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </>
    )
}