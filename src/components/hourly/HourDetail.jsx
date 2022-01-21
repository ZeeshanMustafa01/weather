import React, { useEffect, useState } from 'react';
import { WiHumidity } from 'react-icons/wi';
import { TiLocationArrow } from 'react-icons/ti';
import { weatherImg } from '../../utils/functions';

function HourDetail({ hours, timeZone }) {
	const getHour = function (date) {
		const day = new Date(date * 1000 + timeZone * 1000);
		const hour = day.getHours() + '';
		return hour.padStart(2, '0');
	};
	return (
		<div className={`hours animate__fadeInUp `}>
			{hours.map((h, i) => {
				return (
					<div key={i} className='hour'>
						<img
							className='hour__weather--icon'
							src={weatherImg(h.weather[0].icon)}
							alt='weather icon'
						/>

						<ul className='hour__details'>
							<li className='hour__temp'>{Math.round(h.temp)}&deg;</li>
							<li className='hour__weather'>{h.weather[0].main}</li>
							<li className='hour__humidity'>
								<WiHumidity /> <span>{h.humidity} %</span>
							</li>
							<li className='hour__wind'>
								<TiLocationArrow /> <span>{Math.round(h.wind_speed)} mph</span>
							</li>
							<li className='hour__time'>
								<p key={h.dt}>{getHour(h.dt)}:00</p>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}

export default HourDetail;
