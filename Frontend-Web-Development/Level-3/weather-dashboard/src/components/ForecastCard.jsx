import { Wind } from "lucide-react";

export default function ForecastSection({ dailyForecast, hourlyForecast }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full items-center forecast w-full md:px-0 px-[6px]">
      {/* Daily Forecast */}
      <div className="p-4 rounded-xl shadow card md:w-full w-3/5">
        <h2 className="text-lg font-bold text-white mb-3">5 Days Forecast</h2>

        <div>
          {dailyForecast.map((day, idx) => {
            const date = new Date(day.dt_txt);
            const temp = Math.round(day.main.temp);

            let tempColor = "text-gray-200";
            if (temp >= 30) tempColor = "text-red-400";
            else if (temp >= 20) tempColor = "text-yellow-400";
            else tempColor = "text-blue-400";

            return (
              <div
                key={idx}
                className="flex items-center md:gap-10 justify-between py-1"
              >
                {/* Icon */}
                <div className="flex items-center gap-3">
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="forecast"
                    className="w-8 h-8"
                  />
                  <p className={`font-semibold ${tempColor}`}>{temp}°C</p>
                </div>

                {/* Day + Date */}
                <div className="text-right text-gray-300 flex items-center gap-1">
                  <p className="font-medium">
                    {date.toLocaleDateString("en-US", { weekday: "long" })},
                  </p>
                  <p className="text-sm">
                    {date.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="md:p-6 p-4 md:px-10 rounded-xl shadow card md:w-full w-3/5">
        <h2 className="text-lg font-bold text-white mb-4">Hourly Forecast</h2>

        <div className="flex flex-row space-x-2 md:flex-shrink-0 overflow-x-auto">
          {hourlyForecast.map((hour, idx) => {
            const date = new Date(hour.dt_txt);
            const temp = Math.round(hour.main.temp);

            let tempColor = "text-gray-200";
            if (temp >= 30) tempColor = "text-red-400";
            else if (temp >= 20) tempColor = "text-yellow-400";
            else tempColor = "text-blue-400";

            return (
              <div
                key={idx}
                className="flex flex-col md:gap-0 gap-1 items-center rounded-lg p-3 w-24 shadow hourly-cards"
              >
                {/* Time */}
                <p className="text-sm text-gray-300 font-medium">
                  {date.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </p>

                {/* Icon */}
                <img
                  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                  alt="forecast"
                  className="w-8 h-8 my-2"
                />

                {/* Temp */}
                <p className={`font-bold ${tempColor}`}>{temp}°C</p>

                {/* Wind */}
                <div className="flex gap-1 justify-center items-center flex-col mt-2">
                  <Wind size={18} />
                  <p className="text-xs text-gray-400">
                    {hour.wind.speed} km/h
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
