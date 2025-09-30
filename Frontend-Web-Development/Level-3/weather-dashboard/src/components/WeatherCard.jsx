import {
  Droplets,
  Wind,
  Gauge,
  Sunrise,
  Sunset,
  Radiation,
} from "lucide-react";

export default function WeatherCard({ weather, enabled }) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString([], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const day = now.toLocaleDateString([], { weekday: "long" });
  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Temperature based color logic
  let tempColor = "text-blue-400";
  if (temp >= 30) {
    tempColor = "text-red-500";
  } else if (temp >= 20) {
    tempColor = "text-yellow-400";
  }

  return (
    <div className="flex gap-2 md:gap-8 md:flex-row flex-col items-center">
      <div className={`shadow rounded-lg p-6 text-center w-72 ${enabled?"dark-card":"light-card"}`}>
        <h2 className={`font-bold text-lg mb-2 ${enabled?"text-white":"text-gray-600"}`}>
          {weather.name}, {weather.sys.country}
        </h2>
        {/* Current Time, Date & Day */}
        <div className={`${enabled?"text-white":"text-gray-600"} text-sm mb-4`}>
          <h1 className="md:text-5xl text-4xl font-bold mt-8">{time}</h1>
          <p>
            {day}, {date}
          </p>
        </div>
      </div>
      <div className={`shadow-lg rounded-xl p-6 flex items-center justify-between w-[700px] space-x-8 my-4 md:flex-row flex-col ${enabled?"dark-card text-white":"light-card text-gray-600"}`}>
        {/* Temperature */}
        <div className="flex flex-col items-start">
          <p className={`md:text-6xl text-4xl font-bold ${tempColor}`}>{temp}°C</p>
          <p className={`${enabled?"text-gray-300":"text-gray-600"} text-sm`}>Feels like: <span className="font-bold">{feelsLike}°C</span></p>
        </div>

        {/* Icon & Condition */}
        <div className="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather"
            className="mx-auto"
          />
          <p className="capitalize text-lg mt-2">{weather.weather[0].main}</p>
        </div>

        {/* Right Side Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Sunrise className="w-5 h-5 text-yellow-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>Sunrise</p>
              <p>{sunrise}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sunset className="w-5 h-5 text-orange-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>Sunset</p>
              <p>{sunset}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-teal-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>Wind</p>
              <p>{weather.wind.speed} km/h</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-purple-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>Pressure</p>
              <p>{weather.main.pressure} hPa</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Radiation className="w-5 h-5 text-red-400" />
            <div>
              <p className={`${enabled?"text-gray-300":"text-gray-600"}`}>UV</p>
              <p>8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
