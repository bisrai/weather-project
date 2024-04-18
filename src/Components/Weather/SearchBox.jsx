import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import Box from '@mui/material/Box';


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    let weatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await response.json();
            console.log(jsonRes);
            let result = {
            city : city,
            temp : jsonRes.main.temp,
            tempMin : jsonRes.main.temp_min,
            tempMax : jsonRes.main.temp_max,
            humidity : jsonRes.main.humidity,
            feelsLike : jsonRes.main.feels_like,
            weather : jsonRes.weather[0].description,
        }
            console.log(result);
            return result;
        }catch(error){
            throw error;
        }
        
    }

    
    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
        
    }

    return (
        <div className="SearchBox">
            <form action="" onSubmit={handleSubmit}>
                <div className="FormSet">
                    <Box sx={{ width: 740, maxWidth: '100%',}}>
                    <TextField fullWidth label="City Name" required id="city" 
                    value={city}
                    onChange={handleChange} style={{ borderColor: "#009ad8", borderWidth: "4px", color: "#009ad8" }} />
                    </Box>

                    <Button variant="outlined" type="submit" sx={{ width: 160, borderColor: "grey", borderWidth: "1px", color: "#009ad8" }}>
                        Search
                    </Button>
                    <br />
                    {error && <p style={{color : "red"}}>No such place exists!</p>}
                </div>    
            </form>
       
        </div>
    )
}