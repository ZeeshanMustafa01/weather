const API_KEY = process.env.REACT_APP_KEY;
const API_END_POINT = 'https://api.openweathermap.org';

//** Get Weather Data **//
export const getWeatherData = function (latitude, longitude, format) {
	return `${API_END_POINT}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${format}&appid=${API_KEY}`;
};

//** Get Location **//
export const getCityCoords = function (city) {
	return `${API_END_POINT}/data/2.5/weather?q=${city}&appid=${API_KEY}`;
};
