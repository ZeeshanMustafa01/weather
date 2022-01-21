import React from 'react';
import { circleSvg } from '../../../utils/percentCircle';

function WindSpeed({ windSpeed }) {
	return (
		<div className='windSpeed'>
			<h3 className='windSpeed__heading'>wind</h3>
			{circleSvg(windSpeed)}
		</div>
	);
}

export default WindSpeed;
