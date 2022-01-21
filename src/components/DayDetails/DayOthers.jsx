import React, { useContext } from 'react';
import Clouds from './DayOthers/Clouds';
import Humidity from './DayOthers/Humidity';
import UVI from './DayOthers/UVI';
import WindSpeed from './DayOthers/WindSpeed';
import CurrentData from '../../utils/currentContext';

function DayOthers() {
	const { data } = useContext(CurrentData);
	const { daily } = data;
	const { clouds, humidity, wind_speed, uvi } = daily[0];

	return (
		<div className='dayOthers'>
			<WindSpeed windSpeed={wind_speed} />
			<Humidity humidity={humidity} />
			<UVI uvi={uvi} />
			<Clouds clouds={clouds} />
		</div>
	);
}

export default DayOthers;
