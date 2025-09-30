import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import Toggle from "./components/Toggle";

const apiKey = process.env.REACT_APP_WEATHER_API;

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [enabled, setEnabled] = useState(false);

  const changeEnabled = ()=>{
    setEnabled(!enabled)
  }

  const fetchWeather = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    setWeather(null);
    setDailyForecast([]);
    setHourlyForecast([]);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`
      );
      const weatherData = await weatherRes.json();

      if (weatherData.cod !== 200) {
        console.log(weatherData);
        setError("City not found!");
        setLoading(false);
        return;
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`
      );
      const forecastData = await forecastRes.json();

      setWeather(weatherData);

      const dailyForecasts = forecastData.list
        .filter((f) => f.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      const hourlyForecasts = forecastData.list
        .filter((f) => f.dt_txt)
        .slice(0, 5);

      setDailyForecast(dailyForecasts);
      setHourlyForecast(hourlyForecasts);
    } catch (err) {
      console.log(err);
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          const data = await res.json();
          fetchWeather(data.name);
        } catch {
          setError("Could not detect location");
        } finally {
          setLoading(false);
        }
      });
    }
  }, []);

  return (
    <div className={`min-h-screen bg-gray-100 flex flex-col items-center md:p-6 p-4 w-[100vw] overflow-hidden ${enabled? "dark-body":"light-body"}`}>
      <h1 className={`text-2xl lg:text-5xl md:text-4xl font-bold mb-6 mt-3 main-heading ${enabled?"text-white":"text-gray-400"}`}>
        🌦️ Real-Time Weather Dashboard
      </h1>

      <div className="flex md:items-center items-start w-full md:px-12 md:flex-row flex-col md:gap-0 gap-2">
        <Toggle changeEnabled={changeEnabled} enabled={enabled}/>
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => fetchWeather(city)}
          enabled={enabled}
        />
      </div>
      {loading && <Loader />}
      {error && <p className="text-white">{error}</p>}

      {weather && <WeatherCard weather={weather} enabled={enabled}/>}

      {dailyForecast.length > 0 && hourlyForecast.length > 0 && (
        <div className="flex gap-4">
          <ForecastCard
            dailyForecast={dailyForecast}
            hourlyForecast={hourlyForecast}
            enabled={enabled}
          />
        </div>
      )}
    </div>
  );
}
