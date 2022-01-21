import React from 'react';
import { circleSvg } from '../../../utils/percentCircle';

function Humidity({ humidity }) {
	return (
		<div className='humidity'>
			<h3 className='humidity__heading'>Humidity</h3>
			{circleSvg(humidity)}
		</div>
	);
}

export default Humidity;
