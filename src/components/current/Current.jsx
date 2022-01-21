import React, { useContext, useEffect, useState } from 'react';
import Temperature from './Temperature';
import TempInfo from './TempInfo';
import CurrentData from '../../utils/currentContext';

function City() {
	const currentData = useContext(CurrentData);
	const { data, curLoc } = currentData;

	const getCurLocation = () => {
		const { timezone } = data;

		if (curLoc.city && curLoc.country)
			return `${curLoc.country}, ${curLoc.city}`;

		return timezone.replace('/', ', ');
	};

	getCurLocation();
	return (
		<React.Fragment>
			<div className='city animate__fadeInUp'>
				<h1 className='city__title'>{getCurLocation()}</h1>
				<Temperature />
				<TempInfo />
			</div>
		</React.Fragment>
	);
}

export default City;
