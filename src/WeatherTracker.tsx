import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherTracker: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
          params: { q: '6.5244,3.3792' }, // Replace 'Lagos' with a dynamic location if needed
          headers: {
            'X-RapidAPI-Key': 'feb41b59b3msh70a7fd7e881d48cp1c0656jsn763eed7cc4d1', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        });
        setWeather(response.data);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-xl p-6  bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">{weather?.location.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{weather?.location.region}, {weather?.location.country}</p>
      </div>
      <img
        src={weather?.current.condition.icon}
        alt={weather?.current.condition.text}
        className="w-16 h-16"
      />
    </div>
    <div className="mt-4 flex gap-8 items-center justify-between">
      <div>
        <p className="text-4xl font-bold">{weather?.current.temp_c}°C</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{weather?.current.condition.text}</p>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>Wind: {weather?.current.wind_kph} kph</p>
        <p>Humidity: {weather?.current.humidity}%</p>
      </div>
    </div>
  </div>
  );
};

export default WeatherTracker;
