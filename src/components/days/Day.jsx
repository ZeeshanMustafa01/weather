import React, { useContext } from 'react';
import { weatherImg } from '../../utils/functions';
import CurrentData from '../../utils/currentContext';

function Day() {
	const currentData = useContext(CurrentData);
	const { data } = currentData;
	const { daily } = data;

	const weekDays = function (date) {
		const day = new Date(date * 1000 + 3600 * 1000);
		const options = { weekday: 'short' };
		const locale = navigator.language;
		return day.toLocaleDateString(locale, options);
	};

	const weekDates = function (date) {
		const day = new Date(date * 1000 + 3600 * 1000);
		const options = { day: 'numeric' };
		const locale = navigator.language;
		return day.toLocaleDateString(locale, options);
	};

	return (
		<div className='days'>
			{daily.map((d, i) => {
				return (
					<ul key={i} className='day'>
						<li className='day__name'>
							{weekDays(d.dt)} <span>{weekDates(d.dt)}</span>
						</li>
						<li className='day__weather--img'>
							<img src={weatherImg(d.weather[0].icon)} alt='weather icon' />
						</li>
						<li className='day__deg'>
							{d.feels_like.day.toFixed(0)} &deg; &nbsp;
							<span>{d.feels_like.night.toFixed(0)}&deg;</span>
						</li>
						<li className='day__weather'>{d.weather[0].description}</li>
					</ul>
				);
			})}
		</div>
	);
}

export default Day;
