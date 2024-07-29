import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./assets/InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 43.05,
        temp: 36.05,
        tempMin: 36.05,
        tempMax: 36.05,
        humidity: 56,
        weather: "haze",

    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
    <div style={{ textAlign: "center"}}>
        <h2>Weather App By Rishu</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    );
}