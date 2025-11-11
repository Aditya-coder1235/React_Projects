import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="57302cba5cce063f5ad7f59a7d351122";

    let weatherInfo=async()=>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonresponse=await response.json();
       console.log(jsonresponse);
       let result={
            City:city,
            Temperature:jsonresponse.main.temp,
            Humidity:jsonresponse.main.humidity,
            pressure:jsonresponse.main.pressure,
            Feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].main,
            wind_speed:jsonresponse.wind.speed,
       };
         console.log(result);
       return result;
    }

    let handleSearch=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await weatherInfo();
        updateInfo(newInfo);
    }

    return(
        <div>
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="search city" variant="outlined" required value={city} onChange={handleSearch}/>
                <br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}