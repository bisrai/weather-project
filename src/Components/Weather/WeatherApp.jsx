import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Moga",
        feelsLike : 25.55,
        humidity: 42,
        temp: 25.82,
        tempMax: 25.82,
        tempMin: 25.82,
        weather: "overcast clouds",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}