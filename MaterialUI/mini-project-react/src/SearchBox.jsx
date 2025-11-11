import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'


export default function SearchBox({updateinfo}){

    let[city,setCity]=useState("");


    const Api_Url="http://api.weatherapi.com/v1/current.json?key=1faefc7399474480bcb60542252907&q=London&aqi=no";
    const Api_Key="1faefc7399474480bcb60542252907";

    let getwetherInfo=async()=>{
     let response=await fetch(`${Api_Url}?${Api_Key}&q=${city}&api=no`);
     let jsonResponse=await response.json();
     let result={
        city:city,
        temp_c:jsonResponse.current.temp_c,
        temp_f:jsonResponse.current.temp_f,
        humidity:jsonResponse.current.humidity,
        feelslike_c:jsonResponse.current.feelslike_c,
        wind_dir:jsonResponse.current.wind_dir,
     };
     return result;
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        setCity("")
        let newinfo=await getwetherInfo();
        updateinfo(newinfo);
    }

    return(
        <div className='searchbox'>
           
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br/>
                <br/>
                <Button variant="contained" type='submit'>search</Button>
            </form>
        </div>
    )
}