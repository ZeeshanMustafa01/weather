import React from 'react';
import { circleSvg } from '../../../utils/percentCircle';

function UVI({ uvi }) {
	return (
		<div className='uvi'>
			<h3 className='uvi__heading'>UV Index</h3>
			{circleSvg(uvi)}
		</div>
	);
}

export default UVI;
