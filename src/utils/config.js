const API_KEY = process.env.REACT_APP_KEY;
const Celcius = 'metric';
const Fernheit = 'imperial';

// Get Weather Data
export const getWeatherData = function (latitude, longitude, format) {
	return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${format}&appid=${API_KEY}`;
};

// Get Search Location
export const getCityCoords = function (city) {
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
};
