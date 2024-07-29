import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_KEY = "1ab0a889120a839370375f558a67cc3e";

    let getWeatherInfo = async () => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        try {
            let response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let jsonResponse = await response.json();
                let result = {
                city: city,    
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
