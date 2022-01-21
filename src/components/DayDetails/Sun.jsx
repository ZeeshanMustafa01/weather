import React, { useContext } from 'react';
import { BsSunrise } from 'react-icons/bs';
import { BsSunset } from 'react-icons/bs';
import CurrentData from '../../utils/currentContext';

function Sun() {
	const { data } = useContext(CurrentData);
	const { daily } = data;
	const today = daily[0];

	const getTime = function (date) {
		const day = new Date(date * 1000 + data.timezone_offset * 1000);
		const hour = (day.getHours() + '').padStart(2, '0');
		const minutes = (day.getMinutes() + '').padStart(2, '0');
		return `${hour}:${minutes}`;
	};

	return (
		<div className='sun'>
			<div>
				<h3 className='sun__heading'>sunrise</h3>
				<div className='sun__rise'>
					<BsSunrise className='sun__icon' />
					<p>{getTime(today.sunrise)}</p>
				</div>
			</div>
			<div>
				<h3 className='sun__heading'>sunset</h3>
				<div className='sun__set'>
					<BsSunset className='sun__icon' />
					<p> {getTime(today.sunset)}</p>
				</div>
			</div>
		</div>
	);
}

export default Sun;
