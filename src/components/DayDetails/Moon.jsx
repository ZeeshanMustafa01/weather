import React, { useContext } from 'react';
import { WiMoonrise } from 'react-icons/wi';
import { WiMoonset } from 'react-icons/wi';
import CurrentData from '../../utils/currentContext';

function Moon() {
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
		<div className='moon'>
			<div>
				<h3 className='moon__heading'>moonrise</h3>
				<div className='moon__rise'>
					<WiMoonrise className='moon__icon' />
					<p>{getTime(today.moonrise)}</p>
				</div>
			</div>
			<div>
				<h3 className='moon__heading'>moonset</h3>
				<div className='moon__set'>
					<WiMoonset className='moon__icon' />
					<p> {getTime(today.moonset)}</p>
				</div>
			</div>
		</div>
	);
}

export default Moon;
