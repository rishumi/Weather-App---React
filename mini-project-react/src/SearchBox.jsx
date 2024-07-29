import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_KEY = "1ab0a889120a839370375f558a67cc3e";

    const getWeatherInfo = async () => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonResponse = await response.json();
            const result = {
                city: city,    
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className="SearchBox">
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
