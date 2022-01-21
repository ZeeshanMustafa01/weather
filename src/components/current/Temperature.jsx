import React, { useContext } from 'react';
import { weatherImg } from '../../utils/functions';
import CurrentData from '../../utils/currentContext';

function Temperature() {
	const currentData = useContext(CurrentData);
	const { data, handleWeathFor, weathFormat } = currentData;

	const getCurrentTime = () => {
		const hours = new Date().getHours().toString().padStart(2, '0');
		const minutes = new Date().getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	const getWeathFor = (format) => {
		handleWeathFor(format);
	};

	const { current } = data;
	const { weather, temp } = current;

	return (
		<div className='weather'>
			<div className='weather__info'>
				<img
					className='weather__icon'
					src={weatherImg(weather[0].icon)}
					alt='weather icon'
				/>
				<p className='weather__temp'>
					{temp.toFixed(0)}
					<span>&deg;</span>
				</p>
				<div className='weather__format'>
					<button
						onClick={() => getWeathFor('metric')}
						className={`weather__format--option ${
							weathFormat === 'metric' && 'active'
						}`}>
						C
					</button>
					<button
						onClick={() => getWeathFor('imperial')}
						className={`weather__format--option ${
							weathFormat === 'imperial' && 'active'
						}`}>
						F
					</button>
				</div>
			</div>
			<p className='weather__today'>{weather[0].description}</p>
			<p className='weather__update'>Last updated as {getCurrentTime()}</p>
		</div>
	);
}

export default Temperature;
