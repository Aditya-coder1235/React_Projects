import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo,setWeathetInfo]=useState({
        City:"Delhi",
        Temperature:304,
        Humidity:81,
        Feelslike:311.43,
        pressure:1000,
        wind_speed:4.73,
        weather:"cloud",
    });
    let updateInfo=(result)=>{
        setWeathetInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br></br><br></br>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}